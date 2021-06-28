import React from 'react';
import { useTranslation } from 'react-i18next';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import sectionTitleStyle from "../jss/sections/sectionTitleStyle";

const useStyles = makeStyles(sectionTitleStyle);
export default function SectionTitle() {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <div >
      <Typography variant="h1" className={classNames(classes.title)} noWrap>


       <div style={{textAlign:'center', color:'#661AFF'}}>
       NO deposit/withdraw Fee! 
       </div>
      

      </Typography>
      
      <div style={{color:'#661AFF', minWidth:'350px', maxWidth:'800px', textAlign:'center', border:'4px solid #661AFF', borderRadius:'20px',  padding:'10px', margin:'0 auto', background:'#f2f2f2', display:'block'}}>
        
         <b>🔥🔥 10% of the earnings are used to buyback Polymars. 🔥🔥</b> <br />
        1.5% of the earnings are used to pay the platform service fee.<br />
        0.5% of the earnings are used to pay the gas fees for compounding.<br />
        <br />

        🔥 <b>POLYMARS is bought back on every compound.</b>🔥<br />
        Our vaults auto-compound once every 5 minutes.<br />
        They do not reward POLYMARS, they reward the same thing you deposited.<br />
      </div>
      
    </div>
  )
}
