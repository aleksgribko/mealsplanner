import { color } from "../../globalStyle/variables"
export default {
  wrap: {
    flex: 1,
    backgroundColor: "rgba(85, 131, 3, 0.6)",
  },
  cardDay: {
    flex: 1,
    minWidth: 300,
    minHeight: 150,
    backgroundColor: "#F5F5F5",
    zIndex: 4,
    margin: 10,
    borderRadius: 5,
  },
  dayTitle: {
    color: "#888",
    fontSize: 20,
    width: "100%",
    textAlign: "center",
    padding: 10,
  },
  mealText: {
    color: "#888",
    fontSize: 14,
    padding: 10,
  },
  buttonAdd: {
    backgroundColor: "#cd0000",
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },

  buttonAddText: { fontSize: 14, color: "#fff" },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(85, 131, 3, 0.6)",

  },
  modalView: {
    minWidth: 300,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: "#cd0000",
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
}