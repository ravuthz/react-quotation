const Section = ({ children, className }) => {
  return (
    <div className={'row ' + className}>
      <div className="col-12">
        <section className="section">
          {children}
        </section>
      </div>
    </div>
  );
};

export default Section;
