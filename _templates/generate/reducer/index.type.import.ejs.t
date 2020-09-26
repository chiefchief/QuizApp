---
inject: true
to: src/reducers/index.ts
before: // ADD IMPORT TYPE
---
  INITIAL_<%=h.changeCase.constant(name)%>,