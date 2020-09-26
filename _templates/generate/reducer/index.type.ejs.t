---
inject: true
to: src/reducers/index.ts
before: // ADD TYPE
---
  <%=h.changeCase.camel(name)%>: INITIAL_<%=h.changeCase.constant(name)%>;