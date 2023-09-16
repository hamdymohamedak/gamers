<?php
define("Username", "admin");
define("Password", "r!2(3RoMC<Urn7B");
header("Content-Type: application/json");
$Authorization = $_SERVER["Authorization"]??$_SERVER["HTTP_AUTHORIZATION"];
if (isset($Authorization)) {
  if ($Authorization == "Basic ".base64_encode(Username.":".Password)) {
    $dns = "mysql:host=host;dbname=database";
    try {
      $db = new PDO($dns, "root", "");
      $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      // $q = "CREATE TABLE IF NOT EXISTS `registration` ( `rank` char(15) NOT NULL, `name` char(30) NOT NULL, `age` tinyint(4) NOT NULL, `maritalstatus` char(15) NOT NULL, `children` tinyint(4) NOT NULL, `email` char(30) NOT NULL, `password` char(30) NOT NULL, `status` char(15) NOT NULL DEFAULT 'unconfirmed', `activation_code` char(30) NOT NULL, `date` datetime NOT NULL, `id` int(11) NOT NULL ) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
      // $db->exec($q);
      // $q = "ALTER TABLE `registration` DROP PRIMARY KEY, ADD PRIMARY KEY (`date`);";
      // $db->exec($q);
      // $q = "CREATE TABLE IF NOT EXISTS `messages` ( `name` char(30) NOT NULL, `email` char(30) NOT NULL, `phone` char(11) NULL, `message` text NOT NULL, `date` datetime NOT NULL, `id` int(11) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
      // $db->exec($q);
      // $q = "ALTER TABLE `messages` DROP PRIMARY KEY, ADD PRIMARY KEY (`date`);";
      // $db->exec($q);
      // $q = "CREATE TABLE IF NOT EXISTS `vacations` ( `status` char(10) NOT NULL DEFAULT 'unaccept', `name` char(30) NOT NULL, `email` char(30) NOT NULL, `days` tinyint(4) NOT NULL, `reason` text NOT NULL, `date` datetime NOT NULL, `id` int(11) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8;";
      // $db->exec($q);
      // $q = "ALTER TABLE `vacations` DROP PRIMARY KEY, ADD PRIMARY KEY (`date`);";
      // $db->exec($q);
      if ($_POST["action"] == "addGame") {
        $activation_code = substr(str_shuffle("0123456789ABCDEFGHIJKLMNOBQRSTUVWXYZ"), 1, 10);
        $q = "INSERT INTO `registration` (`rank`, `name`, `age`, `maritalstatus`, `children`, `email`, `password`, `activation_code`, `date`, `id`) VALUES ('".$_POST["rank"]."', '".$_POST["name"]."', '".$_POST["age"]."', '".$_POST["maritalstatus"]."', '".$_POST["children"]."', '".$_POST["email"]."', '".$_POST["password"]."', '".$activation_code."', '".date("Y-m-d H:i:s")."', '".rand(0, 999999999)."');";
        $db->exec($q);
        header("Location: login.php?success=registration");
        exit;
      } elseif ($_POST["action"] == "signin") {
        $q = "SELECT * FROM `registration` WHERE `rank` = '".$_POST["rank"]."' AND `email` = '".$_POST["email"]."';";
        foreach ($db->query($q) as $user) {}
        if (empty($user)) {
          header("Location: login.php?error=Unregistered");
        } else {
          if ($user["status"] == "confirmed") {
            setcookie("login", "yes");
            setcookie("email", $user["email"]);
            setcookie("password", $user["password"]);
            setcookie("permission", $_POST["rank"]);
            header("Location: ".$uri);
          } elseif ($user["status"] == "unconfirmed") {
            header("Location: login.php?error=Unconfirmed");
          } elseif ($user["status"] == "confirmed") {
            setcookie("login", "yes");
            setcookie("email", $user["email"]);
            setcookie("password", $user["password"]);
            header("Location: login.php?error=Unaccepted");
          }
        }
        exit;
      } elseif ($_POST["action"] == "confirmation") {
        $q = "SELECT * FROM `registration` WHERE `activation_code` = '".$_POST["code"]."';";
        foreach ($db->query($q) as $user) {}
        if (empty($user)) {
          header("Location: login.php?error=Unregistered");
        } else {
          $q = "UPDATE `registration` SET `status` = 'confirmed' WHERE `registration`.`activation_code` = '".$_POST["code"]."';";
          $db->exec($q);
          header("Location: login.php?success=Confirmed");
        }
        exit;
      } elseif ($_POST["action"] == "user") {
        $q = "SELECT * FROM `registration` WHERE `rank` = '".$_POST["rank"]."' AND `email` = '".$_POST["email"]."';";
        foreach ($db->query($q) as $user) {}
        if (empty($user)) {
          echo json_encode(["ok"=>false]);
        } else {
          echo json_encode(["ok"=>true, $user]);
        }
        exit;
      } elseif ($_POST["action"] == "vacation") {
        $q = "INSERT INTO `vacations` (`name`, `email`, `phone`, `message`, `date`, `id`) VALUES ('".$_POST["name"]."', '".$_POST["email"]."', '".$_POST["phone"]."', '".$_POST["message"]."', '".date("Y-m-d H:i:s")."', '".rand(0, 9999999)."');";
        $db->exec($q);
        header("Location: ".$uri);
        exit;
      } elseif ($_POST["action"] == "message") {
        $q = "INSERT INTO `messages` (`name`, `email`, `phone`, `message`, `date`, `id`) VALUES ('".$_POST["name"]."', '".$_POST["email"]."', '".$_POST["phone"]."', '".$_POST["message"]."', '".date("Y-m-d H:i:s")."', '".rand(0, 9999999)."');";
        $db->exec($q);
        setcookie("message", $_COOKIE["message"]+1);
        header("Location: ".$uri);
        exit;
      } elseif ($_POST["action"] == "table") {
        $rows = [];
        if (isset($_POST["rank"])) {
          $q = "SELECT * FROM `".$_POST["table"]."` WHERE `rank` = '".$_POST["rank"]."';";
        } else {
          $q = "SELECT * FROM `".$_POST["table"]."`;";
        }
        foreach ($db->query($q) as $row) {
          $rows[count($rows)] = $row;
        }
        if (empty($row)) {
          echo json_encode(["ok"=>false]);
        } else {
          echo json_encode(["ok"=>true, $rows]);
        }
        exit;
      }
    } catch (PDOException $e) {
      echo json_encode(["ok"=>false, "message"=>$e->getMessage()]);
    }
  } else {
    echo json_encode(["ok"=>false, "description"=>"Authorization Failed"]);
    http_response_code(401);
  }
} else {
  echo json_encode(["ok"=>false, "description"=>"Authorization Failed"]);
  http_response_code(405);
}
?>