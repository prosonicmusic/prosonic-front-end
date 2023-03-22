import Product from "@/src/components/Product";
import axios from "axios";

export default function TracksPage({ tracksData }) {
  return (
    <div className="flex flex-row flex-wrap relative p-5 overflow-visible bg-[#1a1c20] h-full m-auto w-full max-w-5xl text-[#bcc7d4] top-[75px] rounded-[20px] mb-[134px]">
      <div className="h-full w-full m-auto max-w-5xl px-5 flex max-md:block justify-between items-end my-5">
        <h1 className="font-medium max-[900px]:pb-5 max-[900px]:text-center text-2xl">
          Latest tracks
        </h1>
        <div className="flex items-center justify-center">
          <div className="mr-3 relative">
            <select className="py-[4px] px-2 text-[11px] rounded-lg transition duration-300 bg-[#23252b] text-[#bcc7d4] border-none outline-none">
              <option value="">Genres</option>
              <option value="Ambient & Chill">Ambient & Chill</option>
              <option value="Cinematic">Cinematic</option>
              <option value="Disco">Disco</option>
              <option value="Dubstep">Dubstep</option>
              <option value="EDM">EDM</option>
              <option value="Electro House">Electro House</option>
              <option value="Folk">Folk</option>
              <option value="Hause">Hause</option>
              <option value="Hip hop">Hip hop</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="Rnb">Rnb</option>
              <option value="Trap">Trap</option>
            </select>
            <span className="caret"></span>
          </div>
          <div className="mr-3 relative">
            <select className="py-[4px] px-2 text-[11px] rounded-lg transition duration-300 bg-[#23252b] text-[#bcc7d4] border-none outline-none">
              <option value="">Prices</option>
              <option value="0,99">Up to 99€</option>
              <option value="100,199">100€ to 199€</option>
              <option value="200,299">200€ to 299€</option>
              <option value="300,499">300€ to 399€</option>
              <option value="500,99999">More than 500€</option>
            </select>
            <span className="caret"></span>
          </div>
          <div className="mr-3 relative">
            <select className="py-[4px] px-2 text-[11px] rounded-lg transition duration-300 bg-[#23252b] text-[#bcc7d4] border-none outline-none">
              <option value="">Daws</option>
              <option value="cubase">Cubase</option>
              <option value="flStudio">FL Studio</option>
            </select>
            <span className="caret"></span>
          </div>
        </div>
      </div>

      {tracksData.map((track) => {
        return <Product product={track} key={track.id} />;
      })}
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await axios.get(
    "http://localhost:4545/product/get?product_type=Track&page_size=5"
  );
  const { results } = data;

  return {
    props: {
      tracksData: results,
    },
  };
}
