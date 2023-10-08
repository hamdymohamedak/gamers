module.exports = async (req, res, next) => {
  const available_platforms = [
    "pc",
    "android",
    "playstation",
    "xbox",
    "online",
    "iphone",
  ];

  const platform = req.body.platform;

  if (platform in available_platforms) {
    next();
  } else {
    return res.json({
      success: false,
      message: `available platforms: ${available_platforms}`
    })
  }
};
