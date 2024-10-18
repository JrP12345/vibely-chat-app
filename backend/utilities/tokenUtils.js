import jwt from "jsonwebtoken";

export const setTokenCookie = (user, res) => {
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return res.cookie("token", token, {
    maxAge: 60 * 60 * 1000, // 1 hour expiration
    httpOnly: true,
    secure: true,
  });
};
