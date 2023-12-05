interface Props {
  itemsCount: number;
}
const Navbar = ({ itemsCount }: Props) => {
  return <div>Items: {itemsCount} </div>;
};

export default Navbar;
