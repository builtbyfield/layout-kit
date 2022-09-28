import plugin from "tailwindcss/plugin";

import { createVar, fallbackVar, getVarName } from "./vars";
import { calc } from "./calc";

const scrollbarVisibleWidthVar = createVar("scrollbar-visible-width", "0px");
const containerVar = createVar("container");
const containerWithScrollbarVar = fallbackVar(
  containerVar,
  `100vw - ${scrollbarVisibleWidthVar}`
);
const marginsVar = createVar("margins");
const guttersVar = createVar("gutters");
const columnsVar = createVar("columns");
const containerColumnsVar = createVar("container-columns");
const containerColumnsWithFallbackVar = fallbackVar(
  containerColumnsVar,
  columnsVar
);

const classes = [
  {
    name: "w",
    suffix: "-cols",
    attribute: "width",
    addMarginLeft: true,
  },
  {
    name: "mr",
    suffix: "-cols",
    attribute: "margin-right",
    addGutter: true,
  },
  {
    name: "ml",
    suffix: "-cols",
    attribute: "margin-left",
    addGutter: true,
  },
  {
    name: "mx",
    suffix: "-cols",
    attribute: ["margin-right", "margin-left"],
    addGutter: true,
  },
  {
    name: "-mr",
    suffix: "-cols",
    attribute: "margin-right",
    inverse: true,
    addGutter: true,
  },
  {
    name: "-ml",
    suffix: "-cols",
    attribute: "margin-left",
    inverse: true,
    addGutter: true,
  },
  {
    name: "-mx",
    suffix: "-cols",
    attribute: ["margin-right", "margin-left"],
    inverse: true,
    addGutter: true,
  },
  {
    name: "mr",
    suffix: "-cols-no-gutter",
    attribute: "margin-right",
  },
  {
    name: "ml",
    suffix: "-cols-no-gutter",
    attribute: "margin-left",
    accountForContainerMarginLeft: true,
  },
  {
    name: "mx",
    suffix: "-cols-no-gutter",
    attribute: ["margin-right", "margin-left"],
  },
  {
    name: "-mr",
    suffix: "-cols-no-gutter",
    attribute: "margin-right",
    inverse: true,
  },
  {
    name: "-ml",
    suffix: "-cols-no-gutter",
    attribute: "margin-left",
    inverse: true,
  },
  {
    name: "-mx",
    suffix: "-cols-no-gutter",
    attribute: ["margin-right", "margin-left"],
    inverse: true,
  },
  {
    name: "pr",
    suffix: "-cols",
    attribute: "padding-right",
    addGutter: true,
  },
  {
    name: "pl",
    suffix: "-cols",
    attribute: "padding-left",
    addGutter: true,
  },
  {
    name: "px",
    suffix: "-cols",
    attribute: ["padding-right", "padding-left"],
    addGutter: true,
  },
  {
    name: "pr",
    suffix: "-cols-no-gutter",
    attribute: "padding-right",
  },
  {
    name: "pl",
    suffix: "-cols-no-gutter",
    attribute: "padding-left",
  },
  {
    name: "px",
    suffix: "-cols-no-gutter",
    attribute: ["padding-right", "padding-left"],
  },
  {
    name: "left",
    suffix: "-cols",
    attribute: "left",
    addGutter: true,
  },
  {
    name: "right",
    suffix: "-cols",
    attribute: "right",
    addGutter: true,
  },
  {
    name: "inset-x",
    suffix: "-cols",
    attribute: ["right", "left"],
    addGutter: true,
  },
  {
    name: "left",
    suffix: "-cols-no-gutter",
    attribute: "left",
  },
  {
    name: "right",
    suffix: "-cols-no-gutter",
    attribute: "right",
  },
  {
    name: "inset-x",
    suffix: "-cols-no-gutter",
    attribute: ["right", "left"],
  },
  {
    name: "-left",
    suffix: "-cols",
    attribute: "left",
    addGutter: true,
    inverse: true,
  },
  {
    name: "-right",
    suffix: "-cols",
    attribute: "right",
    addGutter: true,
    inverse: true,
  },
  {
    name: "-inset-x",
    suffix: "-cols",
    attribute: ["right", "left"],
    addGutter: true,
    inverse: true,
  },
  {
    name: "-left",
    suffix: "-cols-no-gutter",
    attribute: "left",
    inverse: true,
  },
  {
    name: "-right",
    suffix: "-cols-no-gutter",
    attribute: "right",
    inverse: true,
  },
  {
    name: "-inset-x",
    suffix: "-cols-no-gutter",
    attribute: ["right", "left"],
    inverse: true,
  },
];

type Class = typeof classes[number];
type Columns = number;
type Fraction = `${number}/${number}`;

type Options = {
  container?: {
    [key: string]: string;
  };
  margins?: {
    [key: string]: string;
  };
  gutters?: {
    [key: string]: string;
  };
  columns?: {
    [key: string]: number;
  };
};

const tailwindLayout = plugin.withOptions(
  (opts: Options = {}) =>
    ({
      addUtilities,
      matchUtilities,
      addComponents,
      matchComponents,
      addBase,
      addVariant,
      theme,
      config,
      corePlugins,
      e,
    }) => {
      const prefix = (key: any) => `${`${key}`}`;

      /**
       * OPTIONS
       *
       * If your plugin requires config, you can access these options here.
       * Docs: https://tailwindcss.com/docs/plugins#exposing-options
       */
      const options = {
        CONTAINER: opts.container || {},
        MARGINS: opts.margins || {},
        COLUMNS: opts.columns || {},
        GUTTERS: opts.gutters || {},
      };

      /**
       * VARIABLES
       */
      const breakpoints = theme("screens");
      const firstBreakpoint = breakpoints ? Object.keys(breakpoints)[0] : null;
      const maxColumns = options.COLUMNS;
      const maxColumnAmount = Math.max.apply(Math, Object.values(maxColumns));
      const fractions: Fraction[] = ["1/2", "1/3", "1/4", "2/3", "3/4"];

      /**
       * STYLES
       */
      const rootVariables: Record<string, Record<string, any>>[] = [{}];
      const styles: Record<string, Record<string, any>>[] = [
        {
          ".container": {
            width: "100%",
            maxWidth: containerVar,
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: marginsVar,
            paddingRight: marginsVar,
          },
          ".cols-container": {
            display: "flex",
            flexFlow: "row wrap",
            marginLeft: calc.multiply(guttersVar, -1),
          },
          ".cols-container > [class*='-cols']": {
            marginLeft: guttersVar,
          },
          ".cols-container > .ml-0": {
            marginLeft: 0,
          },
        },
      ];

      /**
       * FUNCTIONS
       */
      function generateRootVariables() {
        breakpoints
          ? Object.keys(breakpoints).forEach((bp) => {
              let styles = {
                ":root": {
                  "--breakpoint": `${JSON.stringify(bp + "")}`,
                  [getVarName(containerVar)]: parseInt(options.CONTAINER[bp], 10)
                    ? options.CONTAINER[bp]
                    : "unset",
                  [getVarName(marginsVar)]: options.MARGINS[bp],
                  [getVarName(columnsVar)]: `${options.COLUMNS[bp]}`,
                  [getVarName(guttersVar)]: options.GUTTERS[bp],
                },
              };

              if (bp === firstBreakpoint) {
                rootVariables.push({
                  ...styles,
                });
              } else {
                rootVariables.push({
                  [`@screen ${bp}`]: {
                    ...styles,
                  },
                });
              }
            })
          : null;
      }

      function generateClasses(
        variant: Columns | Fraction,
        obj: Class,
        calc: string,
        cCalc: string,
        vwCalc?: string
      ) {
        let attrs: Record<string, string> = {};
        let cAttrs: Record<string, string> = {};
        let vwAttrs: Record<string, string> = {};

        if (obj.addGutter) {
          calc = `((${calc}) + ${guttersVar})`;
          cCalc = `((${cCalc}) + (2 * ${guttersVar}))`;
        }

        if (obj.accountForContainerMarginLeft) {
          // for when you have a margin-left inside of a cols-container
          // need to account for the cols-container negative margin left
          cCalc = `((${cCalc}) + ${guttersVar})`;
        }

        if (obj.inverse) {
          calc = `(${calc}) * -1`;
          cCalc = `(${cCalc}) * -1`;
          vwCalc = `(${vwCalc}) * -1`;
        }

        if (Array.isArray(obj.attribute)) {
          obj.attribute.forEach((attr) => {
            attrs[attr] = `calc(${calc})`;
            cAttrs[attr] = `calc(${cCalc})`;
            vwAttrs[attr] = `calc(${vwCalc})`;
          });
        } else {
          attrs[obj.attribute] = `calc(${calc})`;
          cAttrs[obj.attribute] = `calc(${cCalc})`;
          vwAttrs[obj.attribute] = `calc(${vwCalc})`;
        }

        styles.push({
          [`${prefix("." + e(obj.name + "-" + variant + (obj.suffix || "")))}`]:
            attrs,
          [`${prefix(".cols-container")} > ${prefix(
            "." + e(obj.name + "-" + variant + (obj.suffix || ""))
          )}`]: cAttrs,
          [`${prefix(
            "." + e(obj.name + "-" + variant + (obj.suffix || ""))
          )}-vw`]: vwAttrs,
        });
      }

      /**
       * 1. The function generateByColumn() takes a parameter “cols”, which is the number of columns.
       * 2. It loops over the array of objects “classes”, which contains the class names and the properties.
       * 3. It generates the calculations for the properties, which are used in the generateClasses() function.
       * 4. The generateClasses() function takes the parameters “cols”, “obj”, “calc”, “cCalc”, and “vwCalc”.
       * 5. The function loops over the properties in “obj” and generates the classes.
       * 6. The class names are generated by combining the column number and the property name.
       * 7. The properties are assigned the calculations generated in the generateByColumn() function.
       */
      function generateByColumn(cols: Columns) {
        classes.forEach((obj) => {
          let calc = `((${cols} / ${containerColumnsWithFallbackVar}) * 100%) - (${guttersVar} - (${cols} / ${containerColumnsWithFallbackVar} * ${guttersVar}))`;
          let cCalc = `((${cols} / ${containerColumnsWithFallbackVar}) * (100% - ${guttersVar})) - (${guttersVar} - (${cols} / ${containerColumnsWithFallbackVar} * ${guttersVar}))`;
          let vwCalc = `((${containerWithScrollbarVar} - (((${columnsVar} - 1) * ${guttersVar}) + (2 * ${marginsVar}))) / (${columnsVar}))`;
          if (cols > 1) {
            vwCalc = `${vwCalc} * ${cols}`;
            vwCalc = `(${vwCalc}) + (${cols - 1} * ${guttersVar})`;
          }
          generateClasses(cols, obj, calc, cCalc, vwCalc);
        });
      }

      function fixNesting(cols: Columns) {
        styles.push({
          [`${prefix(".w")}-${cols}-cols > *`]: {
            [getVarName(containerColumnsVar)]: `${cols}`,
          },
          [`${prefix(".w")}-${cols}-cols-vw > *`]: {
            [getVarName(containerColumnsVar)]: `${cols}`,
          },
        });
      }

      function generateByFraction(fraction: Fraction) {
        const splitFraction = fraction.split("/").map(Number);

        const oneMinusNumeric =
          Math.floor((1 - splitFraction[0] / splitFraction[1]) * 1000) / 1000;
        const percent =
          Math.floor((splitFraction[0] / splitFraction[1]) * 100000) / 1000;

        classes.forEach((obj) => {
          let calc = `${percent}% - (${guttersVar} * ${oneMinusNumeric})`;
          let cCalc = `${percent}% - ${guttersVar}`;

          generateClasses(fraction, obj, calc, cCalc);
        });
      }

      generateRootVariables();

      // Make classes for the number of columns
      for (let i = 1; i <= maxColumnAmount; i++) {
        generateByColumn(i);
        fixNesting(i);
      }

      // Make classes for fractions
      fractions.forEach((fraction) => {
        generateByFraction(fraction);
      });

      addBase(rootVariables);
      addComponents(styles, {
        respectPrefix: false,
      });
    }
);

export default tailwindLayout;
