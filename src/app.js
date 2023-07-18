require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
//morgan ช่วยดูว่า req เข้ามาที่ server เราจริงหรือเปล่า แล้ว response เป็นอะไรออกไป
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const notFoundMiddleware = require("./middlewares/not-found");
const errorMiddleware = require("./middlewares/error");

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "develop") {
  app.use(morgan("dev"));
}

app.use(helmet());
app.use(
  rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 1000,
    message: { message: "too many requests" },
  })
);

// cors convert request body ที่เป็น string ให้เป็น object javascript
app.use(cors());

app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port || 8000, () => {
  console.log("server running on port " + port);
});
