import React, { Suspense } from "react";
import styles from "../../../../styles/info.module.css";
import Info from "../../../../components/info";

async function InfoCont({ params: { tel } }: { params: { tel: string } }) {
  return (
    <div className={styles.cont}>
      <Suspense fallback={<div>Loading movie info...</div>}>
        <Info tel={tel} />
      </Suspense>
    </div>
  );
}

export default InfoCont;
