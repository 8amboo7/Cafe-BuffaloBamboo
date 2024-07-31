import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/1.png";
import ajPanwitImage from "../assets/images/2.png";
import coffeeImage from "../assets/images/4.png";
import bnktImage from "../assets/images/3.png";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ BuffaloBamboo</h1>
        <h2>
          คาเฟ่สีชมพูที่จะดื่มกาแฟและมีหนังสือนิยายเกย์ในร้านมากมาย
          รวมถึงมีควายให้คุณได้ลองขี่
        </h2>
      </section>

      <section className="flex flex-col container mx-auto py-8 gap-3 h-fit">
        <h1>เกี่ยวกับเรา</h1>

        <div className="grid grid-cols-2 gap-4 h-fit">
          <p className="text-left col-span-1 text-2xl h-fit">
            BuffaloBamboo Café คาเฟ่สีชมพูทรงควายสุดปังที่คุณจะต้องหลงรัก!
            ที่นี่มีทุกอย่างที่คุณต้องการ ไม่ว่าจะเป็นกาแฟรสชาติเยี่ยม
            หนังสือนิยายเกย์เพียบ และแน่นอน ควายให้ขี่! คุณสามารถจิบกาแฟไป
            อ่านนิยายไป พร้อมกับขี่ควายไปรอบๆ คาเฟ่ได้ รับรองว่าเพื่อนๆ
            จะต้องอิจฉาที่คุณได้มาที่นี่
          </p>

          <div>
            <img
              src={ajPanwitImage}
              alt="Panwit Tuwanut"
              className=" h-64 w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="flex gap-2 flex-col container mx-auto py-8">
        <h1>
          ปัจจุบันคาเฟ่ และห้องสมุดของเรา
          อยู่ในช่วงการดูแลของแบมบูศรุตาโทรัตน์65070211lnwza0071234zazaja
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <img
              src={bnktImage}
              alt="bnkt"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="text-left col-span-2 text-2xl">
            เจ้าของร้านชื่อนางสาวศรุตา โทรัตน์ รหัสนักศึกษา 65070211 อายุ 20 ปี
            4 เดือน 9 วัน เกิดอาการท้อแท้ในชีวิต
            เลยกำเงินก้อนสุดท้ายมาลงทุนเปิดร้านคาเฟ่กับควายที่ซื้อมาตอนโดนพ่อแม่ด่าว่า
            ขี้เกียจเรียนขนาดนี้ ออกมาเลี้ยงควายเถอะ
            ชอบอ่านนิยายเกย์จนที่บ้านไม่มีที่จะเก็บ เลยเอามาไว้ที่ร้าน
            ลูกค้าชอบมาก ไม่สนใจควายเลย สนแต่นิยายเกย์ กาแฟก็ไม่สั่ง
            นั่งทั้งวันทั้งคืน
          </p>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
