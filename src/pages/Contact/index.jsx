import FormulaireContact from "../../components/ContactComponent/FormulaireContact";

const Contact = () => {
  return (
    <>
      <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-grid-blue-900/[0.02]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2VlZjJmZiIvPjxwYXRoIGQ9Ik0zMCAxMGMyMC4wMDUgMCAzMCA5Ljk5NSAzMCAzMHMtOS45OTUgMzAtMzAgMzBTMCA1MC4wMDUgMCAzMCA5Ljk5NSAxMCAzMCAxMHptMCAyMGMxMS4wNDYgMCAyMCA4Ljk1NCAyMCAyMHMtOC45NTQgMjAtMjAgMjBTMTAgNDEuMDQ2IDEwIDMwczguOTU0LTIwIDIwLTIweiIgZmlsbD0iI2QwZDRmZiIvPjwvZz48L3N2Zz4=')]"></div>
      </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
          <FormulaireContact />
        </div>
      </div>
    </>
  );
};

export default Contact;
