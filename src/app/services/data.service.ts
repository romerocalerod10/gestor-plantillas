import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contenidoDinamicoPlantilla1: any[] = [];
  contenidoDinamicoPlantilla2: any[] = [
    "004/005 - Bahia feliz - Playa del Ingles - Palmitos Park",
    "10011 - BAHIA FELIZ",
    "10011 - Playa del Aguila",
    "10011 - Clinica Roca",
    "10011 - Shopping Centre San Agustin",
    "10011 - Av.de la Europea, el Veril 1",
    "10011 - Estación Parque Tropical (andén 4)",
    "10011 - Av. de Italia, 6",
    "10011 - Av. de Italia, 10",
    "10011 - Shopping Centre Plaza Maspalomas",
    "10011 - Av. de Gran Canaria, 18",
    "10011 - Av. de España, 8",
    "10011 - Shopping Centre Yumbo",
    "10011 - Av. de Bonn, 13",
    "10011 - Shopping Centre Cita",
    "10011 - Av. de Tirajana, 14. Plaza Agaete",
    "10011 - Av. de Tirajana, 24. Plaza Teror",
    "10011 - Playa del Ingles",
    "10011 - Av. de Gran Canaria, Plaza Hierro",
    "10011 - Ocean Park",
    "10011 - Shopping Centre Faro 2",
    "10011 - Holiday World",
    "10011 - Cruce Sonnenland",
    "10011 - Ambulatorio",
    "10011 - Karting Maspalomas",
    "10011 - Aqualand",
    "10011 - Montaña La Data",
    "10011 - Cruce Palmitos",
    "10011 - Banana Park",
    "10011 - Bar El Paso",
    "10011 - PALMITOS PARK",
    "NULL"
  ];
  contenidoDinamicoPlantilla3: any[] = [
    "999999",
    "28/02/2024 08:36:09",
    "1002",
    "4",
    "1234567",
    "URBANIZACION BAHIA FELIZ"
  ];
  contenidoDinamicoPlantilla4: any[] = [
    "123456",
    "28/02/2024 08:36:09",
    "G9999999364L008/060E1234533B7",
    "Estación Santa Cantalina (andén 20)",
    "HOSPITAL INSULAR (SUR)",
    "1",
    "1.55"
  ];
  contenidoDinamicoPlantilla5: any[] = [
    "123456",
    "28/02/2024 08:36:09",
    "G9999999364L008/060E1234533B7",
    "Estación Santa Cantalina (andén 20)",
    "HOSPITAL INSULAR (SUR)",
    "1",
    "4.40"
  ];
  contenidoDinamicoPlantilla6: any[] = [
    "123456",
    "28/02/2024 08:36:09",
    "G9999999364L008/060E1234533B7",
    "Estación Santa Cantalina (andén 20)",
    "HOSPITAL INSULAR (SUR)",
    "1",
    "4.40"
  ];
  contenidoDinamicoPlantilla7: any[] = [
    "28/02/2024 08:36:09",
    "83611",
    "4",
    "999999",
    "001002",
    "45",
    "12345678",
    "1",
    "10011 Urbanizacion Bahía Feliz",
    "001",
    "001",
    "002"
  ];
  contenidoDinamicoPlantilla8: any[] = [
    "28/02/2024 08:36:09",
    "83611",
    "4",
    "999999",
    "001002",
    "45",
    "12345678",
    "1",
    "10011 Urbanizacion Bahía Feliz",
    "001",
    "001",
    "002",
    "50"
  ];
  contenidoDinamicoPlantilla9: any[] = [
    "28/02/2024 08:36:09",
    "83611",
    "4",
    "999999",
    "001002",
    "45",
    "12345678",
    "1",
    "10011 Urbanizacion Bahía Feliz",
    "g J.GRANDE/B.F.",
    "001",
    "001",
    "002",
    "28/02/2024 08:36:09",
    "5.80 €",
    "5.80 €",
    "0.00 €",
    "0.00 €",
  ];
  contenidoDinamicoPlantilla10: any[] = [
    "62628",
    "14-12-2017",
    "74 – SAN MATEO",
    "0 – SAN MATEO",
    "0",
    "29-11-2017 09:11:44",
    "60587438",
    "4",
    "10030",
    "18",
    "1",
    "1",
    "28/02/2024 10:27"
  ];
  contenidoDinamicoPlantilla11: any[] = [
    "62628",
    "14-12-2017",
    "Titulo Ida y Vuelta",
    "74 – SAN MATEO",
    "0 – SAN MATEO",
    "21 – FARO MASPALO",
    "29-11-2017 09:11:44",
    "60587438",
    "7",
    "10030",
    "0",
    "1",
    "1",
    "1",
    "28/02/2024 10:27"
  ];
  contenidoDinamicoPlantilla12: any[] = [
    "66914",
    "Sin establecer",
    "Titulo IyV Sábados, Domingos y Festivos",
    "0 – SAN MATEO",
    "20 – PUERTO MOGAN",
    "No existen usos para esta tarjeta",
    "2",
    "28/02/2024 10:26"
  ];
  contenidoDinamicoPlantilla13: any[] = [
    "66939",
    "21-11-2028",
    "29 – JINAMAR",
    "31 – TELDE",
    "21-02-2024 11:52:08",
    "1232345",
    "4",
    "26056",
    "31",
    "1",
    "9",
    "631",
    "28/02/2024 10:26"
  ];
  contenidoDinamicoPlantilla14: any[] = [
    "400000051",
    "31-03-2019 23:59:59",
    "JUBILADO",
    "19-01-2018 12:42:35",
    "60932507",
    "3",
    "34003",
    "29",
    "0",
    "80",
    "28/02/2024 10:26"
  ];
  contenidoDinamicoPlantilla15: any[] = [
    "66865",
    "23-10-2028",
    "Habitualidad",
    "27-02-2024 08:08:54",
    "1232345",
    "4",
    "5025",
    "21",
    "0",
    "3.5",
    "142.75",
    "28/02/2024 08:38"
  ];
  contenidoDinamicoPlantilla16: any[] = [
    "66741",
    "03-01-2028",
    "08-02-2024 12:50:26",
    "1232345",
    "4",
    "25001",
    "16000",
    "5",
    "14",
    "No Existe Recarga Activa",
    "No existe recarga pendiente de activar",
    "28/02/2024 10:28"
  ];
  contenidoDinamicoPlantilla17: any[] = [
    "726382",
    "27-08-2026",
    "24-01-2024 14:02:26",
    "1232345",
    "4",
    "4045",
    "10011",
    "10",
    "16",
    "No Existe Recarga Activa",
    "No existe recarga pendiente de activar",
    "28/02/2024 10:27"
  ];
  contenidoDinamicoPlantilla18: any[] = [
    "64493",
    "19-12-2027",
    "22-01-2024 08:14:55",
    "686",
    "80",
    "565",
    "863",
    "736",
    "1",
    "No Existe Recarga Activa",
    "No existe recarga pendiente de activar",
    "28/02/2024 10:27"
  ];
  contenidoDinamicoPlantilla19: any[] = [
    "570",
    "28/02/2024 12:51:16",
    "0004001002102555001",
    "CM51003012",
    "************7305",
    "A0000000031010",
    "universal pay",
    "365896582",
    "807090",
    "00000001",
    "GEC504",
    "G4C001002L004/045E102555D1",
    "Urbanizacion Bahia Feliz",
    "PLAYA DEL AGUILAR",
    "1",
    "1.40",
    "OPERACION CONTACTLESS",
    "Firma No Necesaria",
    "Salcai Utinsa S.A. - CIF: A-35694487",
    "Incluye S.O.V e I.G.I.C."
  ];
  contenidoDinamicoPlantilla20: any[] = [
    "9999999",
    "28/02/2024 08:36:09",
    "28/02/2024 08:38:31",
    "001002",
    "4",
    "1232345",
    "5.80",
    "1.45",
    "0.00",
    "0.00"
  ];


  constructor() { }
}
