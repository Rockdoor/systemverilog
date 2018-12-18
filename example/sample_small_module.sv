package testpkg;
  parameter P_TESTPKG_PARAM1 = 1;
  parameter P_TESTPKG_PARAM2 = 2;

  typedef struct packed unsigned {
    logic      signal_a;
    bit [31:0] signal_b;
  } testpkg_str_t;
endpackage

module submodule (
  input  logic        CLK,
  input  logic        SUBPORT1,
  input  logic [5:0]  SUBPORT2,
  input  logic [31:0] SUBPORT3,
  output bit   [99:0] SUBOUT
);
endmodule

module sample_small_module (
  input  logic        CLK,
  input  logic        RST_X,
  input  wire  [31:0] A,
  input  wire  [31:0] B,
  output logic [31:0] Q,
  output logic [31:0] QX
);

`ifndef FAIL
`else
`endif

  int simtime;

  function testfunc (logic [7:0] x, logic [8:0] t);
    logic in_testfuncsig;
    in_testfuncsig = x * 2;
    return x + t / in_testfuncsig;
  endfunction

  initial begin : blk_initial
    wait(A == 1'b1);
    simtime = $stime();
    force A = 1;
  end

  always_ff @(posedge CLK, negedge RST_X) begin : blk_main
    if (! RST_X) begin
      Q <= '0;
    end
    else begin
      Q <= A + B + simtime + testfunc(A, B);
    end
  end

  submodule usub (
    .CLK,
    .SUBPORT1 (A),
    .SUBPORT2 (B),
    .SUBPORT3 (simtime),
    .SUBOUT   (QX)
  );

  typedef struct packed unsigned {
    logic        stra;
    logic [31:0] strb;
    int          length;
  } mystr_t;
  
  int          testint;
  mystr_t      teststr;
  logic [31:0] ind1;
  bit          ind2;
  reg   [7:0]  intf;
  integer      intc, intd;
  shortreal    inte [100];
  
  
  testpkg::testpkg_str_t pkgstr;
  
  always_comb begin
    pkgstr.signal_a  = teststr.strb + teststr.strb + testpkg::P_TESTPKG_PARAM2;
    ind1             = 0;
    ind2            <= 8 % testfunc(A, B);
  end
endmodule
