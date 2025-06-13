import style from "./Footer.module.css";
const Footer = ({ completed, totalTodo }) => {
  console.log({ completed });
  return (
    <>
      <div className={style.footer}>
        <span className={style.item}>completed to do {completed}</span>
        <br />
        <span className={style.item}>total to do {totalTodo}</span>
      </div>
    </>
  );
};
export default Footer;
