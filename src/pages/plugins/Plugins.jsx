import React from 'react';

import {Container, Grid} from '@mui/material';

import {PluginCard} from "./PluginCard";
import {Destruktor} from "./Destruktor";
import {Haaschen} from "./Haaschen";
import {Ploink} from "./Ploink";
import {PluginHero} from "./PluginHero";
import {TinyHaas} from "./TinyHaas";
import {BfgCompressor} from "./BfgCompressor";

export function Plugins() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <PluginHero
            hero_title={"Upcoming Plugins"}
            hero_content={
              <>
                Consider this page to be a bit of a placeholder. I'm building my DSP library and the first plugins.
                <br/><br/>
                But I have many fancier things planned, too! Watch this space 😅
              </>
            }
          />
        </Grid>
        <Grid container spacing={3} rowSpacing={2}>
          <PluginCard
            avatar_name={"Audio FX Plugin"}
            avatar_image_url={"/assets/haslo_logo.png"}
            avatar_link={null}
            plugin_title={"tinyHaas"}
            card_subheader={"For all DAWs"}
            plugin_link={null}
            plugin_content={<TinyHaas plugin_title={null}/>}
          />
          <PluginCard
            avatar_name={"Audio FX Plugin"}
            avatar_image_url={"/assets/haslo_logo.png"}
            avatar_link={null}
            plugin_title={"BFG Compressor"}
            card_subheader={"For all DAWs"}
            plugin_link={null}
            plugin_content={<BfgCompressor plugin_link={null}/>}
          />
        </Grid>
        <Grid container spacing={1} rowSpacing={1}>
          <PluginHero
            hero_title={"Voltage Modular / Legacy"}
            hero_content={
              <>
                I've created these plugins a while ago. Years, in fact.
                Most of them were finished in December 2020, and released in early 2021.
                <br/><br/>
                The modules still work of course! So have fun!
              </>
            }
          />
        </Grid>
        <Grid container spacing={3} rowSpacing={2}>
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
          <PluginCard
            avatar_name={"Voltage Modular Module"}
            avatar_image_url={"/assets/voltage_modular.png"}
            avatar_link={"https://cherryaudio.com/products/voltage-modular"}
            plugin_title={"DeSTRuKTor"}
            card_subheader={"for Voltage Modular"}
            plugin_link={"https://store.cherryaudio.com/modules/destruktor"}
            plugin_content={<Destruktor plugin_link={"https://store.cherryaudio.com/modules/destruktor"}/>}
          />
        </Grid>
      </Container>
    </>
  );
}
