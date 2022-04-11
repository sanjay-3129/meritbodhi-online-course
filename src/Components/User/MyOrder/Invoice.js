import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  Link,
  StyleSheet
} from "@react-pdf/renderer";
// import { pdfjs } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

//create styles
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
    backgroundColor: "#fff",
    width: "100%",
    borderCollapse: "collapse"
  },
  //  table thead tr{
  //      border: 1px solid #111,
  //      background-color: #f2f2f2,
  //  },
  //  table td: {
  //      vertical-align: middle !important,
  //      text-align: center,
  //  },
  //  table th, table td: {
  //      padding-top: 08px,
  //      padding-bottom: 08px,
  //  },
  //  table-bordered{
  //      box-shadow: 0px 0px 5px 0.5px gray,
  //  },
  //  table-bordered td, table-bordered th: {
  //      border: 1px solid #dee2e6,
  //  },
  textRight: {
    textAlign: "end"
  },
  w20: {
    width: "20%"
  },
  floatRight: {
    float: "right"
  }
});

// Create Document Component
const Invoice = () => {
  return (
    <View>
      <View style={styles.brandSection}>
        <View class="row">
          <View class="col-6">
            <Text class="text-white">MERIT BODHI</Text>
          </View>
          <View class="col-6">
            <View class="company-details">
              <Text class="text-white">assdad asd asda asdad a sd</Text>
              <Text class="text-white">assdad asd asd</Text>
              <Text class="text-white">+91 888555XXXX</Text>
            </View>
          </View>
        </View>
      </View>

      <View class="body-section">
        <View class="row">
          <View class="col-6">
            <Text class="heading">Invoice No.: 001</Text>
            <Text class="sub-heading">Tracking No. fabcart2025 </Text>
            <Text class="sub-heading">Order Date: 20-20-2021 </Text>
            <Text class="sub-heading">Email Address: customer@gfmail.com </Text>
          </View>
          <View class="col-6">
            <Text class="sub-heading">Full Name: </Text>
            <Text class="sub-heading">Address: </Text>
            <Text class="sub-heading">Phone Number: </Text>
            <Text class="sub-heading">City,State,Pincode: </Text>
          </View>
        </View>
      </View>

      <View class="body-section">
        <Text class="heading">Ordered Items</Text>:{" "}
        {/* <View class="table">
          <thead>
            <tr>
              <th>Product</th>
              <th class="w-20">Price</th>
              <th class="w-20">Quantity</th>
              <th class="w-20">Grandtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product Name</td>
              <td>10</td>
              <td>1</td>
              <td>10</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                Sub Total
              </td>
              <td> 10.XX</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                Tax Total %1X
              </td>
              <td> 2</td>
            </tr>
            <tr>
              <td colspan="3" class="text-right">
                Grand Total
              </td>
              <td> 12.XX</td>
            </tr>
          </tbody>
        </View> */}
        <Text class="heading">Payment Status: Paid</Text>
        <Text class="heading">Payment Mode: Cash on Delivery</Text>
      </View>

      <View class="body-section">
        <Text>
          &copy; Copyright 2021 - MeritBodhi. All rights reserved.
          <Link href="https://www.fundaofwebit.com/" class="float-right">
            www.meritbodhi.com
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Invoice;
