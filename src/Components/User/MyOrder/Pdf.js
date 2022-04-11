import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import {
  Text,
  View,
  Link,
  Page,
  Document,
  StyleSheet,
  Canvas,
  PDFDownloadLink
} from "@react-pdf/renderer";
// import Invoice from "./Invoice";

const styles = StyleSheet.create({
  brandSection: {
    backgroundColor: "#0d1033",
    padding: "10px 40px"
  },
  logo: {
    width: "50%"
  },
  row: {
    display: "flex",
    flexWrap: "wrap"
  },
  col6: {
    width: "50%",
    flex: "0 0 auto"
  },
  textWhite: {
    color: "#fff"
  },
  companyDetails: {
    float: "right",
    textAlign: "right"
  },
  bodySection: {
    padding: "16px",
    border: "1px solid gray"
  },
  heading: {
    fontSize: "20px",
    marginBottom: "08px"
  },
  subHeading: {
    color: "#262626",
    marginBottom: "05px"
  },
  table: {
    display: "table",
    backgroundColor: "#fff",
    width: "100%",
    borderCollapse: "collapse",
    boxSizing: "borderBox",
    textIndent: "initial",
    borderSpacing: "2px",
    borderColor: "grey",
    boxShadow: "0px 0px 5px 0.5px gray"
  },
  thead: {
    display: "table-header-group",
    verticalAlign: "middle",
    borderColor: "inherit",
    borderCollapse: "collapse",
    textIndent: "initial",
    borderSpacing: "2px"
  },
  thr: {
    display: "table-row",
    verticalAlign: "inherit",
    borderCollapse: "collapse",
    textIndent: "initial",
    borderSpacing: "2px",
    border: "1px solid #111",
    backgroundColor: "#f2f2f2"
  },
  th: {
    display: "table-cell",
    verticalAlign: "inherit",
    fontWeight: "bold",
    textAlign: "-internal-center",
    borderCollapse: "collapse",
    textIndent: "initial",
    borderSpacing: "2px",
    paddingTop: "8px",
    paddingBottom: "8px",
    border: "1px solid #dee2e6",
    width: "20%"
  },
  tbody: {
    display: "table-row-group",
    verticalAlign: "middle",
    borderColor: "inherit",
    borderCollapse: "collapse",
    textIndent: "initial",
    borderSpacing: "2px"
  },
  tr: {
    display: "table-row",
    verticalAlign: "middle",
    borderColor: "inherit",
    borderCollapse: "collapse",
    textIndent: "initial",
    borderSpacing: "2px"
  },
  td: {
    display: "table-cell",
    verticalAlign: "middle",
    textAlign: "center",
    borderCollapse: "collapse",
    textIndent: "initial",
    borderSpacing: "2px",
    paddingTop: "8px",
    paddingBottom: "8px",
    border: "1px solid #dee2e6"
  },
  textRight: {
    textAlign: "end"
  },
  floatRight: {
    float: "right"
  }
});

const Pdf = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // THIS IS THE HACK
    // setReady(true);
    setTimeout(() => {
      setReady(false);
    }, 1);
  }, []);

  // const toggle = () => {
  //   setReady(false);
  // };

  // const MyDocument = (
  //   <Document>
  //     <Page size="A4">
  //       <View>
  //         <Canvas style={styles.brandSection}>
  //           <Canvas style={styles.row}>
  //             <Canvas style={styles.col6}>
  //               <Text style={styles.textWhite}>MERIT BODHI</Text>
  //             </Canvas>
  //             <Canvas style={styles.col6}>
  //               <Canvas style={styles.companyDetails}>
  //                 <Text style={styles.textWhite}>
  //                   assdad asd asda asdad a sd
  //                 </Text>
  //                 <Text style={styles.textWhite}>assdad asd asd</Text>
  //                 <Text style={styles.textWhite}>+91 888555XXXX</Text>
  //               </Canvas>
  //             </Canvas>
  //           </Canvas>
  //         </Canvas>

  //         <Canvas style={styles.bodySection}>
  //           <Canvas style={styles.row}>
  //             <Canvas style={styles.col6}>
  //               <Text style={styles.heading}>Invoice No.: 001</Text>
  //               <Text style={styles.subHeading}>Tracking No. fabcart2025 </Text>
  //               <Text style={styles.subHeading}>Order Date: 20-20-2021 </Text>
  //               <Text style={styles.subHeading}>
  //                 Email Address: customer@gfmail.com{" "}
  //               </Text>
  //             </Canvas>
  //             <Canvas style={styles.col6}>
  //               <Text style={styles.subHeading}>Full Name: </Text>
  //               <Text style={styles.subHeading}>Address: </Text>
  //               <Text style={styles.subHeading}>Phone Number: </Text>
  //               <Text style={styles.subHeading}>City,State,Pincode: </Text>
  //             </Canvas>
  //           </Canvas>
  //         </Canvas>
  //         <Canvas style={styles.bodySection}>
  //           <Text style={styles.heading}>Ordered Items</Text>{" "}
  //           <Canvas style={styles.table}>
  //             <Canvas style={styles.thead}>
  //               <Canvas style={styles.thr}>
  //                 <Canvas style={styles.th}>Product</Canvas>
  //                 <Canvas style={styles.th}>Price</Canvas>
  //                 <Canvas style={styles.th}>Quantity</Canvas>
  //                 <Canvas style={styles.th}>Grandtotal</Canvas>
  //               </Canvas>
  //             </Canvas>
  //             <Canvas style={styles.tbody}>
  //               <Canvas style={styles.tr}>
  //                 <Canvas style={styles.td}>Product Name</Canvas>
  //                 <Canvas style={styles.td}>10</Canvas>
  //                 <Canvas style={styles.td}>1</Canvas>
  //                 <Canvas style={styles.td}>10</Canvas>
  //               </Canvas>
  //               <Canvas style={styles.tr}>
  //                 <Canvas style={styles.td}>
  //                   {/* colspan="3" style={styles.text-right"} */}
  //                   Sub Total
  //                 </Canvas>
  //                 <Canvas style={styles.td}> 10.XX</Canvas>
  //               </Canvas>
  //               <Canvas style={styles.tr}>
  //                 <Canvas style={styles.td}>
  //                   {/* colspan="3" style={styles.text-right"} */}
  //                   Tax Total %1X
  //                 </Canvas>
  //                 <Canvas style={styles.td}> 2</Canvas>
  //               </Canvas>
  //               <Canvas style={styles.tr}>
  //                 <Canvas style={styles.td}>
  //                   {/* colspan="3" style={styles.text-right"} */}
  //                   Grand Total
  //                 </Canvas>
  //                 <Canvas style={styles.td}> 12.XX</Canvas>
  //               </Canvas>
  //             </Canvas>
  //           </Canvas>
  //           <Text style={styles.heading}>Payment Status: Paid</Text>
  //           <Text style={styles.heading}>Payment Mode: Cash on Delivery</Text>
  //         </Canvas>
  //         <Canvas style={styles.bodySection}>
  //           <Text>
  //             &copy; Copyright 2021 - MeritBodhi. All rights reserved.
  //             {/* <Link
  //               href="https://www.meritbodhi.com/"
  //               style={styles.floatRight}
  //             >
  //               www.meritbodhi.com
  //             </Link> */}
  //           </Text>
  //         </Canvas>
  //       </View>
  //     </Page>
  //   </Document>
  // );
  const MyDocument = (
    <Document>
      <Page size="A4">
        <View>
          <Text>PDF</Text>
        </View>
        <View>
          <Link href="https://www.fundaofwebit.com/" style={styles.floatRight}>
            www.meritbodhi.com
          </Link>
        </View>
      </Page>
    </Document>
  );

  return (
    <div>
      {ready && (
        <PDFDownloadLink document={MyDocument} fileName="PDF">
          {({ blob, url, loading, error }) =>
            loading ? (
              "Loading document..."
            ) : (
              <Button onClick={() => setReady(false)}>download pdf</Button>
            )
          }
        </PDFDownloadLink>
      )}
      {!ready && <Button onClick={() => setReady(true)}>generate pdf</Button>}
    </div>
  );
};

export default Pdf;

// import React from "react";
// import { Button } from "react-bootstrap";
// import {
//   Text,
//   View,
//   Link,
//   Page,
//   Document,
//   StyleSheet,
//   Canvas,
//   PDFDownloadLink
// } from "@react-pdf/renderer";
// // import Invoice from "./Invoice";

// const styles = StyleSheet.create({
//   brandSection: {
//     backgroundColor: "#0d1033",
//     padding: "10px 40px"
//   },
//   logo: {
//     width: "50%"
//   },
//   row: {
//     display: "flex",
//     flexWrap: "wrap"
//   },
//   col6: {
//     width: "50%",
//     flex: "0 0 auto"
//   },
//   textWhite: {
//     color: "#fff"
//   },
//   companyDetails: {
//     float: "right",
//     textAlign: "right"
//   },
//   bodySection: {
//     padding: "16px",
//     border: "1px solid gray"
//   },
//   heading: {
//     fontSize: "20px",
//     marginBottom: "08px"
//   },
//   subHeading: {
//     color: "#262626",
//     marginBottom: "05px"
//   },
//   table: {
//     display: "table",
//     backgroundColor: "#fff",
//     width: "100%",
//     borderCollapse: "collapse",
//     boxSizing: "borderBox",
//     textIndent: "initial",
//     borderSpacing: "2px",
//     borderColor: "grey",
//     boxShadow: "0px 0px 5px 0.5px gray"
//   },
//   thead: {
//     display: "table-header-group",
//     verticalAlign: "middle",
//     borderColor: "inherit",
//     borderCollapse: "collapse",
//     textIndent: "initial",
//     borderSpacing: "2px"
//   },
//   thr: {
//     display: "table-row",
//     verticalAlign: "inherit",
//     borderCollapse: "collapse",
//     textIndent: "initial",
//     borderSpacing: "2px",
//     border: "1px solid #111",
//     backgroundColor: "#f2f2f2"
//   },
//   th: {
//     display: "table-cell",
//     verticalAlign: "inherit",
//     fontWeight: "bold",
//     textAlign: "-internal-center",
//     borderCollapse: "collapse",
//     textIndent: "initial",
//     borderSpacing: "2px",
//     paddingTop: "8px",
//     paddingBottom: "8px",
//     border: "1px solid #dee2e6",
//     width: "20%"
//   },
//   tbody: {
//     display: "table-row-group",
//     verticalAlign: "middle",
//     borderColor: "inherit",
//     borderCollapse: "collapse",
//     textIndent: "initial",
//     borderSpacing: "2px"
//   },
//   tr: {
//     display: "table-row",
//     verticalAlign: "middle",
//     borderColor: "inherit",
//     borderCollapse: "collapse",
//     textIndent: "initial",
//     borderSpacing: "2px"
//   },
//   td: {
//     display: "table-cell",
//     verticalAlign: "middle",
//     textAlign: "center",
//     borderCollapse: "collapse",
//     textIndent: "initial",
//     borderSpacing: "2px",
//     paddingTop: "8px",
//     paddingBottom: "8px",
//     border: "1px solid #dee2e6"
//   },
//   textRight: {
//     textAlign: "end"
//   },
//   floatRight: {
//     float: "right"
//   }
// });

// export default class Pdf extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       ready: false
//     };
//   }

//   toggle() {
//     this.setState(
//       (prevState) => ({
//         ready: false
//       }),
//       () => {
//         // THIS IS THE HACK
//         setTimeout(() => {
//           this.setState({ ready: true });
//         }, 1);
//       }
//     );
//   }

//   render() {
//     const { ready } = this.state;

//     // const MyDocument = (
//     //   <Document>
//     //     <Page size="A4"></Page>
//     //   </Document>
//     // );

//     const MyDocument = (
//       <Document>
//         <Page size="A4">
//           {/* <Invoice /> */}
//           <View>
//             <Canvas style={styles.brandSection}>
//               <Canvas style={styles.row}>
//                 <Canvas style={styles.col6}>
//                   <Text style={styles.textWhite}>MERIT BODHI</Text>
//                 </Canvas>
//                 <Canvas style={styles.col6}>
//                   <Canvas style={styles.companyDetails}>
//                     <Text style={styles.textWhite}>
//                       assdad asd asda asdad a sd
//                     </Text>
//                     <Text style={styles.textWhite}>assdad asd asd</Text>
//                     <Text style={styles.textWhite}>+91 888555XXXX</Text>
//                   </Canvas>
//                 </Canvas>
//               </Canvas>
//             </Canvas>

//             <Canvas style={styles.bodySection}>
//               <Canvas style={styles.row}>
//                 <Canvas style={styles.col6}>
//                   <Text style={styles.heading}>Invoice No.: 001</Text>
//                   <Text style={styles.subHeading}>
//                     Tracking No. fabcart2025{" "}
//                   </Text>
//                   <Text style={styles.subHeading}>Order Date: 20-20-2021 </Text>
//                   <Text style={styles.subHeading}>
//                     Email Address: customer@gfmail.com{" "}
//                   </Text>
//                 </Canvas>
//                 <Canvas style={styles.col6}>
//                   <Text style={styles.subHeading}>Full Name: </Text>
//                   <Text style={styles.subHeading}>Address: </Text>
//                   <Text style={styles.subHeading}>Phone Number: </Text>
//                   <Text style={styles.subHeading}>City,State,Pincode: </Text>
//                 </Canvas>
//               </Canvas>
//             </Canvas>

//             <Canvas style={styles.bodySection}>
//               <Text style={styles.heading}>Ordered Items</Text>{" "}
//               {/* <Canvas style={styles.table}>
//           <Canvas style={styles.thead}>
//             <Canvas style={styles.thr}>
//               <Canvas style={styles.th}>Product</Canvas>
//               <Canvas style={styles.th}>Price</Canvas>
//               <Canvas style={styles.th}>Quantity</Canvas>
//               <Canvas style={styles.th}>Grandtotal</Canvas>
//             </Canvas>
//           </Canvas>
//           <Canvas style={styles.tbody}>
//             <Canvas style={styles.tr}>
//               <Canvas style={styles.td}>Product Name</Canvas>
//               <Canvas style={styles.td}>10</Canvas>
//               <Canvas style={styles.td}>1</Canvas>
//               <Canvas style={styles.td}>10</Canvas>
//             </Canvas>
//             <Canvas style={styles.tr}>
//               <Canvas style={styles.td} colspan="3" style={styles.text-right">
//                 Sub Total
//               </Canvas>
//               <Canvas style={styles.td}> 10.XX</Canvas>
//             </Canvas>
//             <Canvas style={styles.tr}>
//               <Canvas style={styles.td} colspan="3" style={styles.text-right">
//                 Tax Total %1X
//               </Canvas>
//               <Canvas style={styles.td}> 2</Canvas>
//             </Canvas>
//             <Canvas style={styles.tr}>
//               <Canvas style={styles.td} colspan="3" style={styles.text-right">
//                 Grand Total
//               </Canvas>
//               <Canvas style={styles.td}> 12.XX</Canvas>
//             </Canvas>
//           </Canvas>
//         </Canvas> */}
//               <Text style={styles.heading}>Payment Status: Paid</Text>
//               <Text style={styles.heading}>Payment Mode: Cash on Delivery</Text>
//             </Canvas>

//             <Canvas style={styles.bodySection}>
//               <Text>
//                 &copy; Copyright 2021 - MeritBodhi. All rights reserved.
//                 <Link
//                   href="https://www.fundaofwebit.com/"
//                   style={styles.floatRight}
//                 >
//                   www.meritbodhi.com
//                 </Link>
//               </Text>
//             </Canvas>
//           </View>
//         </Page>
//       </Document>
//     );

//     return (
//       <div>
//         {ready && (
//           <PDFDownloadLink document={MyDocument} fileName="PDF">
//             {({ blob, url, loading, error }) =>
//               loading ? (
//                 "Loading document..."
//               ) : (
//                 <Button onClick={() => this.setState({ ready: false })}>
//                   download pdf
//                 </Button>
//               )
//             }
//           </PDFDownloadLink>
//         )}
//         {!ready && <Button onClick={() => this.toggle()}>generate pdf</Button>}
//       </div>
//     );
//   }
// }
