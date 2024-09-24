import React from 'react';

import {Container, Grid} from '@mui/material';

import {PluginCard} from "./PluginCard";
import {Destruktor} from "./Destruktor";
import {Haaschen} from "./Haaschen";
import {Ploink} from "./Ploink";

export function Plugins() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={3} rowSpacing={2}>
          <PluginCard
            avatar_name={"Voltage Modular Module"}
            avatar_image_url={"/assets/voltage_modular.png"}
            avatar_link={"https://cherryaudio.com/products/voltage-modular"}
            plugin_title={"Destruktor"}
            card_subheader={"for Voltage Modular"}
            plugin_link={"https://store.cherryaudio.com/modules/destruktor"}
            plugin_content={<Destruktor plugin_link={"https://store.cherryaudio.com/modules/destruktor"}/>}
          />
          <PluginCard
            avatar_name={"Voltage Modular Module"}
            avatar_image_url={"/assets/voltage_modular.png"}
            avatar_link={"https://cherryaudio.com/products/voltage-modular"}
            plugin_title={"Hääschen"}
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
