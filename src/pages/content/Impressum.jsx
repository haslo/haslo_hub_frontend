import React from 'react';
import {Container, Grid, Typography} from '@mui/material';
import {HeroBox} from "../../shared/HeroBox";

export function Impressum() {
  return (
    <>
      <Container fixed style={{marginTop: '40px', marginBottom: '100px'}}>
        <Grid container spacing={1} rowSpacing={1}>
          <HeroBox
            hero_title={"Impressum"}
            hero_content={
              <>
                <Typography variant="body1" paragraph>
                  <em>Last updated: 2024-10-08</em>
                </Typography>
                <Typography variant="body1" paragraph>
                  Gemäss schweizerischem Recht:
                </Typography>
                <Typography variant="body1" paragraph>
                  Verantwortlich für den Inhalt dieser Website:
                </Typography>
                <Typography variant="body1" paragraph>
                  dipl. phil. nat.<br/>
                  Guido Gloor<br/>
                  Bernstrasse 94<br/>
                  3072 Ostermundigen<br/>
                  Schweiz
                </Typography>
                <Typography variant="body1" paragraph>
                  Kontakt: <a href="mailto:haslo@haslo.ch">haslo@haslo.ch</a>
                </Typography>
                <Typography variant="body1" paragraph>
                  haslo Plugins ist eine Einzelfirma nach schweizerischem Recht (Obligationenrecht, OR 934 ff.).
                </Typography>
                <Typography variant="body1" paragraph>
                  Haftungsausschluss: Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
                  Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche
                  gegen den Autor wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der
                  Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.
                </Typography>
                <Typography variant="body1" paragraph>
                  Urheberrechte: Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
                  auf der Website gehören ausschliesslich Guido Gloor oder den speziell genannten Rechtsinhabern. Für
                  die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus
                  einzuholen.
                </Typography>
              </>
            }
          />
        </Grid>
      </Container>
    </>
  );
}
