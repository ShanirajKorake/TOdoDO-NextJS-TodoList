import { collectSegmentData } from "next/dist/server/app-render/collect-segment-data";

let todos = [];

export async function GET() {
    return Response.json(todos, { status: 200 });
}

export async function POST(req) {
    const { title } = await req.json();
    const newTodo = {
        id: Date.now(),
        title: title.text,
        completed: false,
    };
    todos.push(newTodo);
    return Response.json(newTodo, { status: 201 });
}

export async function PATCH(req) {
  try {
    const { id } = await req.json();

    todos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    return new Response("Invalid Request", { status: 400 });
  }
}


export async function DELETE(req) {
  try {
    const { id } = await req.json();

    todos = todos.filter(todo => todo.id !== id);

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    return new Response("Invalid Request", { status: 400 });
  }
}
