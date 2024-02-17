import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import icon from "./credit.jpeg";

import "./App.css";
export default function Home() {
  return (
    <div className="wrapper">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia sx={{ height: 200 }} image={icon} title="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Gold Credit Card
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Explore flexible credit card options with competitive rewards and
            superior benefits.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}
