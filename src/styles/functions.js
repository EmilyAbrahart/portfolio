export const flex = (
  direction = "row",
  justifyContent = "center",
  alignItems = "center"
) => {
  return `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: wrap;
    `;
};
