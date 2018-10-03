
class ex_class;
  typedef struct {
    logic exctyp0;
    reg exctyp1;
  } extype_t;
  parameter P_EXCL_A = 100;
  logic [31:0] excv1;
  task exctask ();
    excv1 = '0;
  endtask
endclass

module ex_mod0 (
  input logic CORTEX,
  output wire XANADU
);

  logic exm_cont;

  initial begin : ex_mod_block0
    exm_cont = '1;
  end

endmodule
