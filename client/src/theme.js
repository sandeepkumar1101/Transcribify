// color design tokens export

export const tokensDark = {
  grey: {
    0: "#000000",
    10: "#141414",
    50: "#292929",
    100: "#3d3d3d",
    200: "#525252",
    300: "#666666",
    400: "#858585",
    500: "#a3a3a3",
    600: "#c2c2c2",
    700: "#e0e0e0",
    800: "#f0f0f0",
    900: "#ffffff",
    1000: "#ffffff",
  },

  primary: {
    // blue
    100: "#ffffffcc",
    200: "#ffffff99",
    300: "#ffffff66",
    400: "#ffffff33",
    500: "#141718",
    600: "#232627",
    700: "#00000066",
    800: "#00000099",
    900: "#000000cc",
  },

  secondary: {
    // yellow
    100: "#ffffff",
    200: "#ffffff",
    300: "#4F5152",
    400: "#ffffff",
    500: "#ffffff",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },
};

export const tokensLight = {
  grey: {
    0: "#ffffff",
    10: "#f6f6f6",
    50: "#e0e0e0",
    100: "#c2c2c2",
    200: "#a3a3a3",
    300: "#858585",
    400: "#666666",
    500: "#525252",
    600: "#3d3d3d",
    700: "#292929",
    800: "#141414",
    900: "#000000",
    1000: "#000000",
  },

  primary: {
    // blue
    100: "#ffffff",
    200: "#ffffff",
    300: "#ffffff",
    400: "#ffffff",
    500: "#f9fafb",
    600: "#cccccc",
    700: "#999999",
    800: "#666666",
    900: "#333333",
  },

  secondary: {
    100: "#cceeff",
    200: "#99ddff",
    300: "#e0edff",
    400: "#33baff",
    500: "#00a9ff",
    600: "#0087cc",
    700: "#006599",
    800: "#004466",
    900: "#002233",
  },
};

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              ...tokensDark.primary,
              main: tokensDark.primary[400],
              light: tokensDark.primary[400],
            },
            secondary: {
              ...tokensDark.secondary,
              main: tokensDark.secondary[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.primary[600],
              alt: tokensDark.primary[500],
            },
          }
        : {
            // palette values for light mode
            primary: {
              ...tokensLight.primary,
              main: "#0048ad",
              light: tokensLight.primary[400],
            },
            secondary: {
              ...tokensLight.secondary,
              main: tokensLight.secondary[300],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensLight.grey[500],
            },
            background: {
              default: tokensLight.primary[600],
              alt: tokensLight.primary[500],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
