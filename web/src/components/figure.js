import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { getGatsbyImageData } from "gatsby-source-sanity";
import clientConfig from "../../client-config";

import * as styles from "./figure.module.css";

export function Figure( node ) {

  if (!node.value.asset) {
    return null;
  }


  const imageData = getGatsbyImageData(node.value.asset, { maxWidth: 675 }, clientConfig.sanity);

  console.log(imageData)

  return (
    <figure className={styles.root}>
      <GatsbyImage image={imageData} alt={node.value.alt} />
      {node.value.caption && <figcaption>{node.value.caption}</figcaption>}
    </figure>
  );
}
