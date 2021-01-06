import React from "react";

import Link from "next/link";

import { motion } from "framer-motion";

const variants = {
  initial: {},
  open: {},
};

const ContentCard = () => {
  const maxRotate = 3;
  const randomMultiplier = Math.random() < 0.5 ? -1 : 1;
  const random = Math.floor(Math.random() * maxRotate + 1) * randomMultiplier;
  return (
    <motion.div
      initial={{ rotate: random }}
      whileHover={{ scale: 1.05, zIndex: 40, rotate: 0 }}
    >
      <a className={`ContentCard card`}>
        <div
          className="CardBackground"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/4588065/pexels-photo-4588065.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=500&w=750)",
            backgroundPosition: "top 70% center",
          }}
        ></div>
      </a>
    </motion.div>
  );
};

export default ContentCard;
