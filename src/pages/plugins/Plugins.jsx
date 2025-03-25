import React from 'react';

import {Container, Grid} from '@mui/material';

import {HeroBox} from "../../shared/HeroBox";
import {PluginCard} from "./PluginCard";

import {TinyHaas} from "./TinyHaas";
import {BfgCompressor} from "./BfgCompressor";
import {Haaschen} from "./Haaschen";
import {Ploink} from "./Ploink";
import {Destruktor} from "./Destruktor";

export function Plugins({searchQuery}) {
  // TODO eventually use search query
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
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
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
            hero_title={"Upcoming Plugins"}
            hero_content={
              <>
                My interest in plugins has waned a bit, I'm currently pursuing other things. So it'll be a while
                before I dive deep here again. Check out <a href={"https://github.com/haslo/haslo_plugin_refs"}>
                the references I'm using in this GitHub repo
              </a>.
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
      </Container>
    </>
  );
}
