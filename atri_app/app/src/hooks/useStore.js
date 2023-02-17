import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex4": {
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Div7": {
      "callbacks": {}
    },
    "Flex5": {
      "callbacks": {}
    },
    "Div9": {
      "callbacks": {}
    },
    "Image2": {
      "custom": {
        "alt": "cuisine",
        "src": "/app-assets/IMG1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Upload1": {
      "custom": {
        "multiple": false,
        "showFilename": false,
        "text": "Click Here to Upload Your Own Recipe",
        "disabled": false,
        "multuple": true
      },
      "callbacks": {
        "onChange": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox10": {
      "custom": {
        "text": "MealWays is the best place to dive into your favorite kind of food on the horizon here you can have vegan, veg and non vegeterian food available at your service"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image1": {
      "custom": {
        "alt": "Logo",
        "src": "/app-assets/Capture6546.PNG"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "custom": {
        "text": "HOME"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox5": {
      "custom": {
        "text": "COMBOS"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "custom": {
        "text": "ABOUT US "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button1": {
      "custom": {
        "text": "LOGIN NOW !"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Accordion5": {
      "custom": {
        "title": [
          "best cooking techniques",
          "new arrivals every week",
          "Excellent Chefs"
        ],
        "description": [
          "lore ipsum lorem ipsumlore ipsum lorem ipsumlore ipsum lorem ipsumlore ipsum lorem ipsumlore ipsum lorem ipsum",
          "lore ipsum lorem ipsum",
          "lore ipsum lorem ipsum"
        ],
        "open": [
          false,
          false,
          false
        ]
      },
      "callbacks": {}
    },
    "Carousel5": {
      "custom": {
        "items": [
          "lore ipsum lorem ipsum",
          "lore ipsum lorem ipsum",
          "lore ipsum lorem ipsum"
        ],
        "startTile": -1,
        "imageItems": [
          "/app-assets/c1%20img.jpg",
          "/app-assets/c2%20img.jpg",
          "/app-assets/c3%20img.jpg"
        ]
      },
      "callbacks": {
        "onClick": []
      }
    },
    "Toggle2": {
      "custom": {
        "activeColor": "#0fe228",
        "active": false,
        "inactiveColor": "#827e7e"
      },
      "callbacks": {
        "onChange": [
          {
            "sendFile": {
              "alias": "Upload1",
              "props": [
                "io",
                "files"
              ]
            }
          }
        ]
      }
    },
    "Step1": {
      "custom": {
        "color": "#336699",
        "current": 1,
        "title": [
          "recipe 1",
          "recipe 2",
          "recipe 3"
        ],
        "description": [
          "Paneer Kofta",
          "Chicken Nuggets",
          "Fruity Salad"
        ]
      },
      "callbacks": {
        "onClick": []
      }
    },
    "TextBox12": {
      "custom": {
        "text": "Click to Filter Recipes "
      },
      "callbacks": {
        "onClick": []
      }
    }
  }
}};

useStore.setState(desktopModeProps);

export default useStore;
