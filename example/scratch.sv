
module scratch #(
  parameter A = 0,
  parameter B = 1,
  parameter C = 33
) (
  input logic CLK
);
  
  parameter A = ($clog(xx))'('h0);
  
  always_ff @(posedge CLK or negedge RST_X) begin
  end
  
endmodule
