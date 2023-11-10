
import "./buy.css";



const Buy = ()=> {
  return(
    <div>Buy</div>
  )
}











export default Buy;




// import { useTheme } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import MobileStepper from "@mui/material/MobileStepper";
// import Paper from "@mui/material/Paper";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
// import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
// import SwipeableViews from "react-swipeable-views";
// import { autoPlay } from "react-swipeable-views-utils";



// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     title: "2020 Forest River Forester 2441DS-CD Class B+",
//     description:
//       "Forest River 2441 B+ Custom Designed 3 Season Motorhome! Equipped with Solar, receiver hitch, spacious full rear bath, 2 slides extending your bedroom and dinette, maximizing living space. Perfect for families up to 4. Book your tour TODAY!",
//     imgPath:
//       "https://bookings.canadream.com/CORARest/CORARest.dll/GetRvSalesImage?Id=1693479",
//     price: "$88,300.00 "
//   },
//   {
//     title: "2022 Coachmen Beyond 22C",
//     description:
//       "Forest River Coachmen Beyond Class B Motorhome, designed for today's active lifestyles. Experience unrivaled fuel economy combined with legendary styling and reliability. Relax in luxurious captain seats while enjoying the view through large frameless windows. The interior ergonomics ensure you are as comfortable on the road as you are at home. Beyond gets you where the action is, in style! Book your tour TODAY!",
//     imgPath:
//       "https://bookings.canadream.com/CORARest/CORARest.dll/GetRvSalesImage?Id=1625290",
//     price: "$129,821.00"
//   },
//   {
//     title: "2022 Forest River Forester 2651-CDWS",
//     description:
//       "Forest River 2651 CDWS Custom designed Class C TRUE 4 SEASON MOTORHOME! Only available at CanaDream Inc. Our flagship, purpose built floor plan hosts up to 6 people. With a dinette slide out, heated lines and tanks, extra large propane cylinder, solar, receiver hitch, extended cap overhead bunks offering North-South sleeping configuration,  engineered & designed exclusively by CanaDream Inc. Book your tour TODAY!",
//     imgPath:
//       "https://bookings.canadream.com/CORARest/CORARest.dll/GetRvSalesImage?Id=1736547",
//     price: "$113,700.00"
//   },
//   {
//     title: "2022 Palomino HS-2902 Hard Side MAX Backpack Truck Camper",
//     description: "2022 Palomino HS-2902 Hard Side MAX Backpack Truck Camper",
//     imgPath:
//       "https://bookings.canadream.com/CORARest/CORARest.dll/GetRvSalesImage?Id=1726281",
//     price: "$134,800.00"
//   }
// ];

// function Buy() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <>
//       <div className="buy__title">
//         <h2>Experience the RV Lifestyle Before Making a Purchase!</h2>
//         <h3>
//           At CanaDream, we invite you to immerse yourself in the world of RVs
//           before making a commitment. Take advantage of a CanaDream vacation in
//           the RV model you're contemplating buying. This firsthand experience
//           ensures that the RV aligns perfectly with your lifestyle and
//           preferences. Should you choose to become an owner following your
//           vacation, the value of your delightful guest experience will be
//           subtracted from the purchase price, with taxes excluded!
//         </h3>
//         <h4>Seize the opportunity to enjoy your dream vacation – on us!</h4>
//       </div>
//       <div className="buy">
//         <Box sx={{ maxWidth: 800, flexGrow: 1 }}>
//           <Paper
//             square
//             elevation={0}
//             sx={{
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               height: 200,
//               pl: 2,
//               pr: 2,
//               bgcolor: "background.default",
//               border: "1px solid #ddd",
//               marginBottom: 20
//             }}
//             style={{ margin: "20px" }}
//           >
//             <Typography variant="h5">{images[activeStep].title}</Typography>
//             <Typography variant="subtitle1" color="textSecondary">
//               {images[activeStep].description}
//             </Typography>
//             <Typography variant="h6">{`Price: ${images[activeStep].price}`}</Typography>
//           </Paper>
//           <AutoPlaySwipeableViews
//             axis={theme.direction === "rtl" ? "x-reverse" : "x"}
//             index={activeStep}
//             onChangeIndex={handleStepChange}
//             enableMouseEvents
//           >
//             {images.map((step, index) => (
//               <div key={step.title}>
//                 {Math.abs(activeStep - index) <= 2 ? (
//                   <Box
//                     component="img"
//                     sx={{
//                       height: 566, // Set a fixed height for all images
//                       display: "block",
//                       maxWidth: 800,
//                       overflow: "hidden",
//                       width: "100%",
//                       objectFit: "contain"
//                     }}
//                     src={step.imgPath}
//                     alt={step.title}
//                   />
//                 ) : null}
//               </div>
//             ))}
//           </AutoPlaySwipeableViews>
//           <MobileStepper
//             steps={maxSteps}
//             position="static"
//             activeStep={activeStep}
//             nextButton={
//               <Button
//                 size="small"
//                 onClick={handleNext}
//                 disabled={activeStep === maxSteps - 1}
//               >
//                 Next
//                 {theme.direction === "rtl" ? (
//                   <KeyboardArrowLeft />
//                 ) : (
//                   <KeyboardArrowRight />
//                 )}
//               </Button>
//             }
//             backButton={
//               <Button
//                 size="small"
//                 onClick={handleBack}
//                 disabled={activeStep === 0}
//               >
//                 {theme.direction === "rtl" ? (
//                   <KeyboardArrowRight />
//                 ) : (
//                   <KeyboardArrowLeft />
//                 )}
//                 Back
//               </Button>
//             }
//           />
//         </Box>
//       </div>
//     </>
//   );
// }





