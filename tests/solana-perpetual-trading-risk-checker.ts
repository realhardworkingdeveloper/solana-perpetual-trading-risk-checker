import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { SolanaPerpetualTradingRiskChecker } from "../target/types/solana_perpetual_trading_risk_checker";

describe("solana-perpetual-trading-risk-checker", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.SolanaPerpetualTradingRiskChecker as Program<SolanaPerpetualTradingRiskChecker>;

  it("Is initialized!", async () => {
    // Add your test here.
    const tx = await program.methods.initialize().rpc();
    console.log("Your transaction signature", tx);
  });
});
