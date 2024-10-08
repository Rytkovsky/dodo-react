import s from "./PhoneNumber.module.scss";

export const PhoneNumber = ({ className }) => {
  return (
    <>
      <div className={className}>
        <p className={s.phone}>
          <a href="tel:+78003020060">8-800-302-00-60</a>
        </p>
        <p className={s.phone__text}>Звонок бесплатный</p>
      </div>
    </>
  );
};
