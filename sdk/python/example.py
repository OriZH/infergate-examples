from infergate import InferGate

client = InferGate()

print(client.chat("Say hello from InferGate in one sentence."))
print(client.list_models())
