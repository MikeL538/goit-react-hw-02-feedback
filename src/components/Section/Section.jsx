import PropTypes from 'prop-types';
import css from './section.module.css';

function Section({ title, children }) {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;
