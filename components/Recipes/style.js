import { colors } from '../../globalStyle/variables'

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
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
  },
  overlayActionWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150
  },
  overlayWrap: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: "rgba(85, 131, 3,0.8)",
  },
  overlayTitle: {
    fontSize: 16,
    color: 'white'
  }
};
