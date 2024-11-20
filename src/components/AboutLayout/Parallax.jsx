const Parallax = () => {
  return (
    <div className="w-11/12 mx-auto bg-[#EDF1FC] py-12 my-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center text-center gap-5 rounded-xl shadow-lg space-y-10 md:space-y-0">
      <div>
        <span className="text-[#F62D5F] text-7xl font-Lora">85%</span>
        <h4 className="text-lg font-semibold">
          Success for all clients so far
        </h4>
        <p>Setting and achieving goals and objectives</p>
      </div>
      <div>
        <span className="text-[#F62D5F] text-7xl font-Lora">500+</span>
        <h4 className="text-lg font-semibold">Clients consulted in total</h4>
        <p>Making key decisions and designing success strategies</p>
      </div>
      <div>
        <span className="text-[#F62D5F] text-7xl font-Lora">15+</span>
        <h4 className="text-lg font-semibold">
          Certificates globally
        </h4>
        <p>Finding the ideal career/work or business</p>
      </div>
      <div>
        <span className="text-[#F62D5F] text-7xl font-Lora">20+</span>
        <h4 className="text-lg font-semibold">Years of coaching experience</h4>
        <p>Communicating powerfully and succinctly</p>
      </div>
    </div>
  );
};

export default Parallax;
