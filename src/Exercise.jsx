import React from "react"
import Postcard from "./Postcard";

function Exercise(props) {
    console.log(props);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
          Postcard
        </h1>
        <div className="grid md:grid-cols-5 lg:grid-cols-5 gap-6 max-w-5x3 mx-auto">
          <Postcard
           title="Walls of Babylon"
           description="The walls of Babylon were the city walls surrounding the ancient Mesopotamian city of Babylon, the political and religious centre of the Neo-Babylonian Empire. The walls of Babylon were included in many early versions of the Seven Wonders of the Ancient World."
          />
          <Postcard
            title="Egyptian pyramids"
            description="The Egyptian pyramids are ancient masonry structures located in Egypt. Most were built as tombs for the pharaohs and their consorts during the Old and Middle Kingdom periods. At least 138 identified pyramids have been discovered in Egypt. Approximately 80 pyramids were built within the Kingdom of Kush, now located in the modern country of Sudan."
          />
          <Postcard
            title="Mausoleum at Halicarnassus"
            description="The Mausoleum at Halicarnassus or Tomb of Mausolus (Ancient Greek: Μαυσωλεῖον τῆς Ἁλικαρνασσοῦ; Turkish: Halikarnas Mozolesi) was a tomb built between 353 and 351 BC in Halicarnassus (present Bodrum, Turkey) for Mausolus, an Anatolian from Caria and a satrap in the Achaemenid Persian Empire, and his sister-wife Artemisia II."
          />
          <Postcard
            title="Colossus of Rhodes"
            description="The Colossus of Rhodes (Ancient Greek: ὁ Κολοσσὸς Ῥόδιος, romanized: ho Kolossòs Rhódios; Modern Greek: Κολοσσός της Ρόδου, romanized: Kolossós tis Ródou) was a statue of the Greek sun god Helios, erected in the city of Rhodes, on the Greek island of the same name, by Chares of Lindos in 280 BC."
          />
          <Postcard
            title="Temple of Artemis"
            description="The Temple of Artemis or Artemision (Greek: Ἀρτεμίσιον; Turkish: Artemis Tapınağı), also known as the Temple of Diana, was a Greek temple dedicated to a localised form of the goddess Artemis (equated with the Roman goddess Diana)."
          />
          <Postcard
            title="Statue of Zeus at Olympia"
            description="Zeus is the sky and thunder god in ancient Greek religion, who rules as king of the gods on Mount Olympus."
          />
          <Postcard
            title="Cyrus the Great"
            description="Cyrus II of Persia[b] (c.600 -530 BC), commonly known as Cyrus the Great, was the founder of the Achaemenid Empire."
          />
          <Postcard
            title=""
            description=""
          />
          <Postcard
            title=""
            description=""
          />
        </div>
      </div>
    </>
  );
}

export default Exercise