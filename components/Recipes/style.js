import { colors } from "../../globalStyle/variables";

export default {
  wrap: {
    flex: 1,
  },
  buttonAdd: {
    backgroundColor: "#cd0000",
    padding: 20,
    borderRadius: 5,
    marginBottom: 5,
    width: 200,
  },
  buttonAddText: { fontSize: 20, color: "#fff" },
  wrapContent: {
    display: "flex",
    // marginTop: 50,
    // marginBottom: 80,
    width: "100%",
  },
  textInput: {
    height: 40,
    borderColor: "#000000",
    borderBottomWidth: 1,
    marginBottom: 36,
  },
  inline: {
    flexDirection: "row",
  },
  header: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  headerText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  overlayActionWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 150,
    marginBottom: 20,
    marginTop: 20,

  },
  overlayWrap: {
    backgroundColor: "rgba(220, 220, 220,1)",
  },
  overlayInScroll: {
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
  },
  overlayTitle: {
    fontSize: 20,
    color: "black",
    padding: 20
  },
  inputSectionWrap: {
    width: "95%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  ingredientsInputs: {
    flexDirection: 'row',
    alignItems: 'center'
  }
};
