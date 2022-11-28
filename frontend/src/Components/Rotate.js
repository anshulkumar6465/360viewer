import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import ReactDOM from 'react-dom';

// const Rotate = () => (

//   <SafeAreaView style={styles.container}>
//     <ScrollView
//       contentContainerStyle={styles.scrollContentContainer}
//     >

// {/* <img src="C:/Users/kumar/Desktop/vscode/react/Image/public/images/airpods.jpg"> */}

//       <View style={[styles.box, {
//         transform: [{ rotate: "0deg" },{ translateX: -50 },{ translateY: 50 }]
//       }]}>
//         <Text style={styles.text}>Rotate by 45 deg</Text>
//       </View>
//     </ScrollView>
//   </SafeAreaView>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   scrollContentContainer: {
//     alignItems: "center",
//     paddingBottom: 60
//   },
//   box: {
//     height: 100,
//     width: 100,
//     borderRadius: 5,
//     marginVertical: 40,
//     backgroundColor: "#61dafb",
//     alignItems: "center",
//     justifyContent: "center"
//   },
//   text: {
//     fontSize: 14,
//     fontWeight: "bold",
//     margin: 8,
//     color: "#000",
//     textAlign: "center"
//   }
// });

// export default Rotate;

// class RotateIMG extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       rotation: 0,
//     };

//     this.rotate = this.rotate.bind(this);
//     this.rotateleft = this.rotateleft.bind(this);
//   }

//   rotate() {
//     let newRotation = this.state.rotation + 1;
//     if (newRotation >= 360) {
//       newRotation = -360;
//     }
//     this.setState({
//       rotation: newRotation,
//     });
//   }

//   rotateleft() {
//     let newRotation = this.state.rotation - 1;
//     if (newRotation >= 360) {
//       newRotation = -360;
//     }
//     this.setState({
//       rotation: newRotation,
//     });
//   }

//   render() {
//     const { rotation } = this.state;
//     return (
//       <div>
//         <input onClick={this.rotateleft} type="button" value="left" />
//         <img
//           style={{ transform: `rotate(${rotation}deg)` }}
//           src={this.props.src}
//           width="400"
//         />
//         <input onClick={this.rotate} type="button" value="right" />
//       </div>
//     );
//   }
// }

// class ImageUpload extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { file: "", imagePreviewUrl: "" };
//   }

//   _handleImageChange(e) {
//     e.preventDefault();

//     let reader = new FileReader();
//     let file = e.target.files[0];

//     reader.onloadend = () => {
//       this.setState({
//         file: file,
//         imagePreviewUrl: reader.result,
//       });
//     };

//     reader.readAsDataURL(file);
//   }

//   render() {
//     let { imagePreviewUrl } = this.state;
//     let $imagePreview = null;
//     if (imagePreviewUrl) {
//       $imagePreview = <RotateIMG src={imagePreviewUrl} />;
//     } else {
//       $imagePreview = <div className="previewText"></div>;
//     }

//     return (
//       <div className="previewComponent">
//         <form onSubmit={(e) => this._handleSubmit(e)}>
//           <input
//             className="fileInput"
//             type="file"
//             onChange={(e) => this._handleImageChange(e)}
//           />
//         </form>
//         <div className="imgPreview">{$imagePreview}</div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<ImageUpload />, document.getElementById("mainApp"));
