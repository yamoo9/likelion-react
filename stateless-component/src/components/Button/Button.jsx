import classes from './Button.module.css';

export function EuidButton({ mode, children, ...restProps }) {
  return (
    <button type="button" className={classes.component} {...restProps}>
      {children}
    </button>
  );
}

EuidButton.defaultProps = {
  mode: 'primary', // 'secondary'
};

/* -------------------------------------------------------------------------- */

// HTML Standards Component
{
  /* <button></button> */
}

// Custom Component
{
  /* <Button></Button> */
}

// export function Button({ mode, children, onClick, ...restProps }) {
//   console.log(restProps);
//   return <button type="button" className={classes.component} {...restProps} />;
// }

// export function Button({ mode = 'primary', children }) {
//   return (
//     <button type="button" className={classes.component}>
//       {children}
//     </button>
//   );
// }

// const restProps = {
//   onClick,
//   onMounseEnter,
// }

// React.createElement('div', {
//   className: 'parent',
//   children: React.createElement('p', {
//     className: 'child',
//     children: [React.createElement('strong', null, 'Child'), ' 1'],
//     ...restProps
//   }),
// });
