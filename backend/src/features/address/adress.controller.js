import Addresses from "./address.model";

export const fillform = async (req, res, next) => {
  const { pincode, firstname, lastname, address, city, state, mobile } =
    req.body;
  let existingAddress;
  try {
    existingAddress = await Addresses.findOne({ pincode });
  } catch (err) {
    return console.log(err);
  }
  if (existingAddress) {
    return res.status(400).json({ message: "User Already Existed" });
  }

  const addresses = new Addresses({
    pincode,
    firstname,
    lastname,
    address,
    city,
    state,
    mobile,
  });

  try {
    await addresses.save();
  } catch (err) {
    return console.log(err);
  }
  return res.status(201).json({ user });
};
