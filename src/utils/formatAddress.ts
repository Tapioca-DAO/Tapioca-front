const formatAddress = (address: string) => {
  const first = address.substring(0, 6);
  const last = address.substring(address.length - 4, address.length);

  return `${first}...${last}`;
};

export default formatAddress;
