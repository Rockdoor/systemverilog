
// commented

/*asdfasdf***/

`define B

`timescale 1ns/1ps

`define A(a, b) (a + b)
`define MACRO(abs, bzx) begin \
  init(abs + bzx);            \
end

`undef A

`default_nettype logic

`include "test_include2.vh"

`timescale 1ns / 1ps

// timeunit 1ns/1ps;

`define DEF0 aasdfffffffffff
`define DEF1 l=0;\
  varv = variable_long_name;

module dummy #(
  parameter MP_A, parameter MP_B
) (
  input logic CLK,
  input logic RST_X,
  output logic Q
);
endmodule

module prep_mod (
  input logic CLK
);
  logic a = 0;
  reg [31:0] b;

  logic variable_long_name;

`define SW
`define ND

`ifdef SW
`ifdef NDW
  always_comb begin
`else
  always begin
`endif
`elif SWA
  always_latch begin
`else
  always_ff begin
`endif
    // `DEF1 asdf = 1 + a;
    b = '0;
  end

  initial begin
    b = a + 1;
    `DEF0; variable_long_name = '1;
    `DEF1 variable_long_name = '0;
    // `DEF1;
    // c = `DEF0 + variable_long_name;
    `MACRO(a, b);
  end

  `define AXI_CONCAT(P) {                           \
    AXI7_``P``, AXI6_``P``, AXI5_``P``, AXI4_``P``, \
    AXI3_``P``, AXI2_``P``, AXI1_``P``, AXI0_``P``}
  
  msram umsc (
    .CLK,
    .RST_X,
    
    .AXI_AWVALID (`AXI_CONCAT(AWVALID)),
    .AXI_AWADDR  (`AXI_CONCAT(AWADDR)),
    .AXI_AWREADY (`AXI_CONCAT(AWREADY)),
    .AXI_WVALID  (`AXI_CONCAT(WVALID)),
    .AXI_WDATA   (`AXI_CONCAT(WDATA)),
    .AXI_WSTRB   (`AXI_CONCAT(WSTRB)),
    .AXI_WREADY  (`AXI_CONCAT(WREADY)),
    .AXI_BVALID  (`AXI_CONCAT(BVALID)),
    .AXI_BREADY  (`AXI_CONCAT(BREADY)),
    .AXI_ARVALID (`AXI_CONCAT(ARVALID)),
    .AXI_ARADDR  (`AXI_CONCAT(ARADDR)),
    .AXI_ARREADY (`AXI_CONCAT(ARREADY)),
    .AXI_RVALID  (`AXI_CONCAT(RVALID)),
    .AXI_RDATA   (`AXI_CONCAT(RDATA))
  );

  `undef AXI_CONCAT

  initial begin
    a;
    b = c;
  end


endmodule

`default_nettype wire
