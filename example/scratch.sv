
`ifdef ASIC
module scratch ();
`endif
  
  parameter A = ($clog(xx))'('h0);
  
  always_ff @(posedge CLK or negedge RST_X) begin
  end
  
endmodule
