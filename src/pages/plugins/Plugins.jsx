import React from 'react';

import {Container, Grid} from '@mui/material';

import {PluginCard} from "./PluginCard";
import {Destruktor} from "./Destruktor";
import {Haaschen} from "./Haaschen";
import {Ploink} from "./Ploink";
import {PluginHero} from "./PluginHero";

export function Plugins() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <PluginHero
            hero_title={"Voltage Modular / Legacy"}
            hero_content={
              <>
                I've created these plugins a while ago. Years, in fact.
                Most of them were finished in December 2020, and released in early 2021.
                <br/><br/>
                Consider this page to be a bit of a placeholder. The modules still work of course! But I have many
                fancier things planned, including a revamped and improved and extended DAW plugin version of DeSTRuKTor.
                <br/><br/>
                Watch this space 😅
              </>
            }
          />
        </Grid>
        <Grid container spacing={3} rowSpacing={2}>
          <PluginCard
            avatar_name={"Voltage Modular Module"}
            avatar_image_url={"/assets/voltage_modular.png"}
            avatar_link={"https://cherryaudio.com/products/voltage-modular"}
            plugin_title={"DeSTRuKTor"}
            card_subheader={"for Voltage Modular"}
            plugin_link={"https://store.cherryaudio.com/modules/destruktor"}
            plugin_content={<Destruktor plugin_link={"https://store.cherryaudio.com/modules/destruktor"}/>}
          />
          <PluginCard
            avatar_name={"Voltage Modular Module"}
            avatar_image_url={"/assets/voltage_modular.png"}
            avatar_link={"https://cherryaudio.com/products/voltage-modular"}
            plugin_title={"HÄÄSchen"}
            card_subheader={"for Voltage Modular"}
            plugin_link={"https://store.cherryaudio.com/modules/haaschen"}
            plugin_content={<Haaschen plugin_link={"https://store.cherryaudio.com/modules/haaschen"}/>}
          />
          <PluginCard
            avatar_name={"Voltage Modular Module"}
            avatar_image_url={"/assets/voltage_modular.png"}
            avatar_link={"https://cherryaudio.com/products/voltage-modular"}
            plugin_title={"Ploink"}
            card_subheader={"for Voltage Modular"}
            plugin_link={"https://store.cherryaudio.com/modules/ploink"}
            plugin_content={<Ploink plugin_link={"https://store.cherryaudio.com/modules/ploink"}/>}
          />
        </Grid>
      </Container>
    </>
  );
}
