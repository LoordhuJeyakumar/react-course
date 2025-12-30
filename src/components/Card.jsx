//Generic Card component using bootstrap styling consistent styling and design across the application.

const Card = ({ title, heading, footerContent, children }) => {
  return (
    <div className="card text-center">
      <div className="card-header">{heading}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text"> </p>
        {children}
      </div>
      <div className="card-footer text-muted">{footerContent}</div>
    </div>
  );
};

export default Card;
