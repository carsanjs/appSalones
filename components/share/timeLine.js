import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export const Timeline = () => {
  return (
    <View style={styles.timeline}>
      <View style={styles.timelineMonth} className="w-auto m-4">
        <Text className="text-white">August, 2018</Text>
        <Text className="text-white absolute top-0 right-0 bg-black px-2 py-1 rounded-r-full">
          3 Entries
        </Text>
      </View>
      <View style={styles.timelineSection}>
        <Text style={styles.timelineDate} className="text-white pt-px pb-px pl-4 pr-4">
          21, Tuesday
        </Text>
        <View className="flex-row">
          <View className="col-sm-4">
            <View style={styles.timelineBox}>
              <View style={styles.boxTitle} className="flex-row items-center">
                {/* <FontAwesome name="asterisk" size={20} color="green" /> */}
                <Text className="text-white ml-2">Job Created</Text>
              </View>
              <View style={styles.boxContent}>
                <TouchableOpacity
                // style={tailwind('btn-default pull-right')}
                >
                  <Text className="text-white">Details</Text>
                </TouchableOpacity>
                <View style={styles.boxItem}>
                  <Text className="text-gray-400">
                    <Text className="font-bold">Loss Type</Text>: A/C Leak
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text className="text-gray-400">
                    <Text className="font-bold">Loss Territory</Text>: Texas
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text className="text-gray-400">
                    <Text className="font-bold">Start Date</Text>: 08/22/2018
                  </Text>
                </View>
              </View>
              <View style={styles.boxFooter}>
                <Text className="text-white">- Tyler</Text>
              </View>
            </View>
          </View>
          <View className="col-sm-4">
            <View style={styles.timelineBox}>
              <View style={styles.boxTitle} className="flex-row items-center">
                {/* <FontAwesome name="pencil" size={20} color="blue" /> */}
                <Text className="text-white ml-2">Job Edited</Text>
              </View>
              <View style={styles.boxContent}>
                <TouchableOpacity
                // style={tailwind('btn-default pull-right')}
                >
                  <Text className="text-white">Details</Text>
                </TouchableOpacity>
                <View style={styles.boxItem}>
                  <Text className="text-gray-400">
                    <Text className="font-bold">Project Manager</Text>: Marlyn
                  </Text>
                </View>
                <View style={styles.boxItem}>
                  <Text className="text-gray-400">
                    <Text className="font-bold">Supervisor</Text>: Carol
                  </Text>
                </View>
              </View>
              <View style={styles.boxFooter}>
                <Text className="text-white">- Tyler</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timeline: {
    marginTop: 20,
    position: "relative",
  },
  timelineMonth: {
    position: "relative",
    paddingLeft: 35,
    paddingRight: 10,
    backgroundColor: "#444950",
    display: "inline-block",
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "#17191B",
    marginBottom: 30,
  },
  timelineSection: {
    paddingLeft: 35,
    display: "block",
    position: "relative",
    marginBottom: 30,
  },
  timelineDate: {
    marginBottom: 15,
    backgroundColor: "#5bc0de",
    display: "inline-block",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#17191B",
    color: "#fff",
    textShadowColor: "rgba(0, 0, 0, 0.3)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  timelineBox: {
    backgroundColor: "#444950",
    borderRadius: 15,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 1,
    borderColor: "#17191B",
    overflow: "hidden",
  },
  boxTitle: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#17191B",
    flexDirection: "row",
    alignItems: "center",
  },
  boxContent: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "#17191B",
  },
  boxItem: {
    marginBottom: 5,
  },
  boxFooter: {
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderTopWidth: 1,
    borderTopColor: "#17191B",
    backgroundColor: "#444950",
    textAlign: "right",
  },
});
