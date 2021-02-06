import { colors } from "../../globalStyle/variables";

export default {
  wrap: {
    flex: 1,
    backgroundColor: "#9ec4ff",
    alignItems: "center",
    paddingVertical: 20,
    justifyContent: "space-evenly",
  },
  circleAccount: {
    backgroundColor: colors.color1,
    height: 112,
    width: 112,
    borderRadius: 56,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  iconNameWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsWrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  nameAbb: {
    fontWeight: "bold",
    color: "white",
    fontSize: 40,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 10,
  },
  userName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  pesonalInfoSectionWrap: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 40,
  },
  sectionTitle: {
    color: "grey",
    paddingBottom: 15,
  },
  section: {
    paddingLeft: 30,
  },
  subSection: {
    paddingLeft: 30,
    paddingVertical: 10,
  },
  sectionSubtitle: {
    color: "grey",
    fontSize: 11,
  },
  sectionText: {
    color: "black",
    fontSize: 11,
    fontWeight: "bold",
  },
  inputWrap: {
    padding: 15,
    width: 300,
    alignItems: "center",
  },
};
