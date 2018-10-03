
// commented

/*asdfasdf***/

timeunit 3ns / 1ps;

`define A (a, b) (a + b)
`define MACRO "B"

class ax_class;
  typedef struct {
    logic duma;
    reg [11:3] dumb;
  } typcls_t;

  struct {
    logic tes;
  } immstr;

  localparam LP_AXC_Z = 10;
  logic cla;
  typcls_t clb;

  function new (int inp);
    cla = '0 + inp;
  endfunction

  function [31:0] anchor (logic [31:0] a, logic [7:0] b);
    return a + b;
  endfunction
endclass

package ax_pkg;
  parameter PP_A = 0;

  int a = 0;

  typedef logic [111:2] pkgtype0_t;
  typedef struct {
    logic typemem0;
    logic typemem1;
  } pkgtype1_t;

  pkgtype1_t st;
  ax_pkgclass cls;

  function [31:0] user_func_pkg (logic [7:0] a, b, logic [31:0] queue);
    logic c = a + b / queue;

    return c;
  endfunction

  class ax_pkgclass;
    typedef struct {
      logic duma;
      reg [11:3] dumb;
    } typcls0_t;

    typedef struct {
      logic dumf;
      reg [11:3] dumg;
      typcls0_t dumc;
    } typcls1_t;

    localparam LP_AXC_Z = 10;
    logic cla;
    typcls1_t clb;

    function new (int inp);
      cla = '0 + inp;
    endfunction

    function [31:0] anchor (logic [31:0] a, logic [7:0] b);
      return a + b;
    endfunction
  endclass
endpackage

parameter GP_C = 10;

typedef union packed unsigned {
  logic one;
  reg two;
  bit three;
  logic pack;
} newunion_t;

module ax_shader 
// import ax_pkg::*, ax_pkg2::exported_func; 
// import wiered::*;
#(
  parameter int P_A, 
  parameter logic [7:0][8:0][11:1] P_MD = 1 + 1, P_MD2, P_MD3[3] = 32'h0,
  parameter logic [31:0][1:0] P_BBB = 32'hFA0, P_CCC,
  parameter real P_F = 0.1
  )
(
  input  wire         CLK,
  input  logic        RST_X,
  inout  logic [33:0] RSTS_X,
  output reg   [5:1]  Q,
  input  wire         CCC
)
;
  import pkg_ins0::*;

  parameter P_INSIDE = 0;
  localparam real P_LOCAL = 10.3425;

  typedef struct packed unsigned {
    logic signed a;     logic [  31 :0   ] b;
    int c;
    reg d, gzzz;
    void e, f, ghij;
  } defstruct_0_t;

  typedef struct {
    bit asdf;
    defstruct_0_t [1:0] strmem;
  } defstruct_1_t;

  typedef logic signed [7:0][31:0] data_t [];

  task automatic cs::cs2::task_0 (logic [31:9] a, int b, input bit c, output reg d);
    logic tmp;
    tmp = a + b;
    d = tmp / c;
  endtask

  task task_1 (logic a, logic b, output logic [31:0] c);
    a <= b;
    c = b;
  endtask

  function automatic logic signed [31:0] func_0 (
    logic a, b, c, 
    bit [31:0] d);
    localparam LP_FUNC_0_0 = 0;
    reg e = d + a.b ;
    return LP_FUNC_0_0 + a + b / c ** d;
  endfunction

  function ccc::func_1 ();
    return 0;
  endfunction
  
  wire        int wire_decl0;
  wire [31:0] wire_decl1 = 32'd1234, 
  wire_decl2[100]                 = 9;
  wand signed [127:0] wire_decl3  = '0;
  
  logic [31:0] data_decl0;
  const var automatic int data_decl1, data_decl2 = '1;
  defstruct_0_t struct_decl0;
  defstruct_1_t struct_decl1;
  reg [1:0]     RSDUMMY = 'x;
  data_t        typedef_data0;
  data_t        queue[$];
  
  `ifdef NDEF
  ax_shader #(.ABC())
  umod (
    .CLK (clk.a + struct_decl0.ghij),
    .RST_X,
    .RSTS_X(),
    .Q(),
    .CCC(),
    .AAA
  );
  `endif
  
  ax_shader umoa (
    .CLK (CLK),
    .RST_X (),
    .*
  );
  
  ex_mod0 exmod (
    .CORTEX (),
    .XANADU
  );
  
  newunion_t uni;
  ax_class axc;
  ex_class exc;
  ax_pkg::ax_pkgclass pkgcls;

  initial begin : initblock
    data_decl0 = ax_pkg::st.typemem + pkgcls.clb.dumc.dum;
    str = CLK / RSTS_X * P_BBB;
    struct_decl0.a = struct_decl1.strmem.ghij;
    data_decl0 = wire_decl2 + data_decl0 + 3 + func_0(10, a, 1234, c);
    str = ax_pkg::user_func_pkg(a, b, q) + RSTS_X;
    axc = new();
    data_decl2 = axc.clb.dumb + pkgcls.anchor(a, b) + task_0(axc,b ,c, 100);
    // data_decl1 = GP_C + P_BBB + 32'h000;
    task_1(a, b, c);
    data_decl1 <= '0;
    
    if (! RST_X) begin
      a = b;
      fifo_read = c;
      asdfasdf = c;
    end
    else if (CLK) begin
      
    end
    else begin
    end
  end 

  always_ff @(posedge CLK, negedge RST_X) begin
    if (! RST_X) begin
    end
    else if (CLK) begin
      y            = $bits(rcp_tmp_t)'(pix_pos.y);
    end
    else begin    
      assert (! (write_done[i] && write_done[j]) || (write_bank_idx[i] != write_bank_idx[j])) else begin
        $display("msram: write: Bank conflict! (ch.%02d x ch.%02d, %02d-th bank)", i, j, write_bank_idx[i]);
        -> ev_conf_wr;
      end
    end
  end

endmodule : ax_shader
